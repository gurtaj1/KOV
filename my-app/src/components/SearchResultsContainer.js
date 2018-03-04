import React from 'react';
import {connect} from 'react-redux';

import ProductsListItem from './ProductsListItem';
import Pagination from './Pagination';

import SearchResultsContainerCSS from './SearchResultsContainer.css'

class SearchResults extends React.Component {
    getResults() {
        if (this.props.products.length > 0) {
            return this.props.products.map(product => {
                if (this.props.products.indexOf(product) >= (this.state.activePage*12) - 12 && this.props.products.indexOf(product) < (this.state.activePage*12)) {
                    return (
                        <ProductsListItem
                            key={product.id}
                            brand={product.brand}
                            model={product.model}
                            price={product.price}
                            image={product.image}
                            link={"/"+product.type+"/"+product.id}
                        />
                    )
                }
            })
        } else {
            return <div className="mx-auto">No products match the search criteria entered.</div>
        }
    }
    state = {
        activePage: 1
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }
    createPagination() {
        if (this.props.products.length > 12) {
            if (this.props.products.length > this.state.activePage * 12 && this.state.activePage > 1) { //if there are products following AND preceding the current page
                return (
                    <Pagination 
                        onclick1={() => this.handlePageChange(this.state.activePage - 1)}
                        onclick2={() => this.handlePageChange(this.state.activePage + 1)}
                        disabled1={false}
                        disabled2={false}
                    />
                )
            } else if (this.props.products.length > this.state.activePage * 12) { //if there are only products following the current page
                return (
                    <Pagination 
                        onclick1={() => this.handlePageChange(this.state.activePage - 1)}
                        onclick2={() => this.handlePageChange(this.state.activePage + 1)}
                        disabled1={true}
                        disabled2={false}
                    />
                ) 
            } else if (this.state.activePage > 1) { //if there are only products preceding the current page
                return (
                    <Pagination 
                        onclick1={() => this.handlePageChange(this.state.activePage - 1)}
                        onclick2={() => this.handlePageChange(this.state.activePage + 1)}
                        disabled1={false}
                        disabled2={true}
                    />
                ) 
            }

        }
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <h2 id="basketHeader">Product Search</h2>
                </div>
                <div className="row">
                    <div className="mx-auto">
                        <h5>Search results for '<span id="searchTerm">{this.props.match.params.query}</span>':</h5>
                    </div>
                </div>
                <div className="row">
                    {this.getResults()}
                </div>
                {this.createPagination()}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let products = state.products;
    let productsCopy = products;
    if (typeof ownProps.match.params.query === "string") { //if a search was actually made
        let queryArray = ownProps.match.params.query.toLowerCase().split(" "); //produces array even if query was just one word with no " " present. (split by " " rather than "%20" since the space is still a space it just appears as "%20" when in the url)

        productsCopy = productsCopy.filter(product => {    
            let productArray = Object.values(product);              //since each product is an object within the products array; only want the value of each property (key-value pair); values as an array is handy for iterating through.
            return queryArray.every(function(query){                //struggled for so long before realising the 'return' here was necessary for the enclosing filter function to actually extract anything from the productsCopy (array of objects) upon which it was called. - without 'return' written, the every function would still have returned true for the products which matched all terms in the search query, but it would have just been like writing 'true' on its own within the filter function, rather than 'return true' which is what is needed.
                for (var i=1; i<4; i++) {                         //iterate from index 1 to 4 rather than whole length of productArray as only want to seach in the 'type', 'brand', and 'model' of the product (may edit this to include product 'text' later)
                    if (typeof productArray[i] === "string") {
                        if (productArray[i].indexOf(query) != -1) {
                            return true;
                        }
                    }
                }
            })

        })
    } else {
        productsCopy = [];
    }

    return {
        products: productsCopy
    }
}



export const SearchResultsContainer = connect(mapStateToProps)(SearchResults);