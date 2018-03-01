import React from 'react';
import Pagination from './Pagination';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import changeBrandFilter from '../actions/changeBrandFilter';
import changePriceFilter from '../actions/changePriceFilter';

import CategoryOverview from './CategoryOverview';
import Filter from './Filter';
import ProductsListItem from './ProductsListItem';
import ProductsPageContainerCSS from './ProductsPageContainer.css';

class ProductsPage extends React.Component{
    createCategoryOverview() {
        return this.props.overview.map(overview => {
            return (
                <CategoryOverview 
                    title={overview.title}
                    text={overview.text}
                    image={overview.imageSource}
                    alt={overview.imageAlt}
                />
            )
        })
    }
    createBrandFilterList() {
        return this.props.brandFilters.map(filter => {
            return (
                <Filter
                    name={this.props.match.params.type + "brandFilter"} //so that each seperate group of radio buttons (filters) refer only to each other. (the name is shared between each group)
                    id={filter.brand}
                    changeFilterResetPageNumber={() => {this.props.changeBrandFilter(filter); this.handlePageChange(1)}} //without page reset would often get no products displayed on filter application due to the activePage state remaining at the page that was active at the time of filter application
                    inuse={filter.inuse}
                />
            )
        })
    }
    createPriceRangeFilterList() {
        return this.props.priceRangeFilters.map(filter => {
            return (
                <Filter
                    name={this.props.match.params.type + "priceFilter"} 
                    id={filter.priceRange}
                    changeFilterResetPageNumber={() => {this.props.changePriceFilter(filter); this.handlePageChange(1)}}
                    inuse={filter.inuse}
                />
            )
        })
    }
	filterDivExtenionToggle () {
            var filterDivExtension = document.querySelector('.filterDivExtension');
            var chevronUp = document.querySelector('#chevronUp');
            var chevronDown = document.querySelector('#chevronDown');
            var icon;
			if (filterDivExtension.style.display === 'block') {
                filterDivExtension.style.display = 'none';
                chevronUp.style.display = 'none';
                chevronDown.style.display = 'block';
			} else {
                filterDivExtension.style.display = 'block';
                chevronUp.style.display = 'block';
                chevronDown.style.display = 'none';
			}
    }
    createProductsList() {
        if(this.props.products.length > 0) {
            return this.props.products.map(product =>{
                if (this.props.products.indexOf(product) >= (this.state.activePage*12) - 13 && this.props.products.indexOf(product) < (this.state.activePage*12)) {
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

            })} else {
                return <div>No products match the filter criteria selected above.</div>
            } 
    }
    constructor(props) { //set initial state
        super(props);
        this.state = {activePage: 1};
    }
    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
    }
    createPagination() {
        if (this.props.products.length > 12) {
            return (
                <Pagination 
                    onclick1={() => this.handlePageChange(1)}
                    onclick2={() => this.handlePageChange(2)}
                />
            )
        }
    }
    render () {
        return (
            <div>
                <div className="container">
                    {this.createCategoryOverview()}
                    <div ClassName="row">
                        <div className= "filterDiv col-12">
                            <div className="iconCrossbar">
                                <i id="chevronDown" className="fa fa-chevron-down" onClick={this.filterDivExtenionToggle}></i>
                                <i id="chevronUp" className="fa fa-chevron-up" onClick={this.filterDivExtenionToggle}></i>
                            </div>
                            <div className="filterDivExtension">
                                <div className="row">
                                    <div className="filtersList col-md-6 col-12">
                                        Filter by Brand:
                                        <div>
                                            {this.createBrandFilterList()}
                                        </div>
                                    </div>
                                    <div className="filtersList col-md-6 col-12">
                                        Filter by Price Range:
                                        <div>
                                            {this.createPriceRangeFilterList()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
        filter => filter.type === ownProps.match.params.type
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
        product => product.type === ownProps.match.params.type //gets type from the the route params and finds products which have type that matches
    )
    let activeBrandFilters = filtered_brandFilters.filter(
        item => item.inuse === true
    );
    activeBrandFilters.forEach(filter => {
        if (filter.brand != "ALL") {
            filtered_products = filtered_products.filter(
                product => product.brand === filter.brand
            )
        }
    });
    let activePriceRangeFilters = filtered_priceRangeFilters.filter(
        item => item.inuse === true
    );
    activePriceRangeFilters.forEach(filter => {
        if (filter.priceRange != "ALL") {
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeBrandFilter: changeBrandFilter, changePriceFilter: changePriceFilter}, dispatch);
};

export const ProductsPageContainer = connect(mapStateToProps, matchDispatchToProps)(ProductsPage);