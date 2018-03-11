import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import changeBrandFilter from '../actions/changeBrandFilter';
import changePriceFilter from '../actions/changePriceFilter';

import CategoryOverview from './CategoryOverview';
import FiltersLists from './FiltersLists';
import ProductsListItem from './ProductsListItem';
import Pagination from './Pagination';

class ProductsPage extends React.Component{
    createCategoryOverview() {
        let i = 1;
        return this.props.overview.map(overview => {
            i++
            return (
                <CategoryOverview 
                    key={"catOverview"+i} //each child in an array or iterator should have a unique "key" prop
                    title={overview.title}
                    text={overview.text}
                    image={overview.imageSource}
                    alt={overview.imageAlt}
                />
            )
        })
    }
    createFiltersLists() {
        return (
            <FiltersLists
                brandFilters={this.props.brandFilters}
                priceRangeFilters={this.props.priceRangeFilters}
                type={this.props.match.params.type}
                brandFilterClick={this.props.changeBrandFilter} //action creator passed down. this will not be called on the component that this function creates, but on the element in the component that is rendered by the component that this function creates - (ProductsPageContainer > FiltersLists > Filter - **input**). this is why no curley brackets. '()' were used here but in the component below - follow this action down the tree for more clarity.
                priceFilterClick={this.props.changePriceFilter}
             />
        )
    }
    createProductsList() {
        if(this.props.products.length > 0) {
            if(Math.ceil(this.props.products.length/12) < this.state.activePage) {
                this.setState({activePage: 1});
            }
            return this.props.products.map(product =>{
                if (this.props.products.indexOf(product) >= (this.state.activePage*12) - 12 && this.props.products.indexOf(product) < (this.state.activePage*12)) { //render the 12 (number of products per page) products that correspond to the current (active) page
                    return (
                        <ProductsListItem
                            key={product.id}
                            brand={product.brand}
                            model={product.model}
                            price={product.price}
                            image={product.image}
                            link={"/"+this.props.match.params.type+"/"+product.id}
                        />
                    )
                } 
                else {
                    return (
                        ""
                    )
                }
        })} else {
            return <div>No products match the filter criteria selected above.</div>
        } 
    }
    state = {
        activePage: 1
    }
    createPagination() {
        if (this.props.products.length > 12) {
            if (this.props.products.length > this.state.activePage * 12 && this.state.activePage > 1) { //if there are products following AND preceding the current page
                return (
                    <Pagination 
                        onclick1={() => this.setState({activePage: this.state.activePage - 1})}
                        onclick2={() => this.setState({activePage: this.state.activePage + 1})}
                        disabled1={false}
                        disabled2={false}
                    />
                )
            } else if (this.props.products.length > this.state.activePage * 12) { //if there are only products following the current page
                return (
                    <Pagination 
                        onclick1={() => this.setState({activePage: this.state.activePage - 1})}
                        onclick2={() => this.setState({activePage: this.state.activePage + 1})}
                        disabled1={true}
                        disabled2={false}
                    />
                ) 
            } else if (this.state.activePage > 1) { //if there are only products preceding the current page
                return (
                    <Pagination 
                        onclick1={() => this.setState({activePage: this.state.activePage - 1})}
                        onclick2={() => this.setState({activePage: this.state.activePage + 1})}
                        disabled1={false}
                        disabled2={true}
                    />
                ) 
            }

        }
    }
    render () {
        return (
            <div>
                <div className="container">
                    {this.createCategoryOverview()}
                    <div className="row">
                        {this.createFiltersLists()}
                    </div>
                    <div className="row productsList">
                        {this.createProductsList()}
                    </div>
                    {this.createPagination()}
                </div>
            </div>
        )
    }
};

function mapStateToProps(state , ownProps) {
    let brandFilters = state.brandFilters;
    let filtered_brandFilters = brandFilters;
    filtered_brandFilters = filtered_brandFilters.filter(
        filter => filter.type === ownProps.match.params.type //gets type from the the route params and finds products which have type that matches
    )
    let priceRangeFilters = state.priceRangeFilters;
    let filtered_priceRangeFilters = priceRangeFilters;
    filtered_priceRangeFilters = filtered_priceRangeFilters.filter(
        filter => filter.type === ownProps.match.params.type
    )
    let overviews = state.overviews;
    let overview = overviews.filter(
        overview => overview.type === ownProps.match.params.type
    )
    let products = state.products;
    let filtered_products = products;
    filtered_products = filtered_products.filter(
        product => product.type === ownProps.match.params.type
    )
    let activeBrandFilters = filtered_brandFilters.filter(
        item => item.inuse === true
    );
    activeBrandFilters.forEach(filter => {
        if (filter.brand !== "ALL") {
            filtered_products = filtered_products.filter(
                product => product.brand === filter.brand
            )
        }
    });
    let activePriceRangeFilters = filtered_priceRangeFilters.filter(
        item => item.inuse === true
    );
    activePriceRangeFilters.forEach(filter => {
        if (filter.priceRange !== "ALL") {
            filtered_products = filtered_products.filter(
                product => product.priceRange === filter.priceRange
            );
        }
    });
    let key = ownProps.match.params.type;
    return {
        overview: overview,
        brandFilters: filtered_brandFilters,
        priceRangeFilters: filtered_priceRangeFilters,
        products: filtered_products,
        key: key //a change of key property means the component remounts. this was needed so that when on a second page of products (state is activePage: 2) and switching to a 'page' with products type that does not have a second page (uses same components but displays different type of products), no products would be displayed because the component did not remount and thh state remained the same (activePage did not reset to 1)
    };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeBrandFilter: changeBrandFilter, changePriceFilter: changePriceFilter}, dispatch);
};

export const ProductsPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductsPage);