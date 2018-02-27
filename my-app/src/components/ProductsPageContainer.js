import React from 'react';
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
                    key={filter.brand}
                    id={filter.brand}
                    changeFilter={() => this.props.changeBrandFilter(filter)}
                    inuse={filter.inuse}
                    disabled={filter.disabled}
                />
            )
        })
    }
    createPriceRangeFilterList() {
        return this.props.priceRangeFilters.map(filter => {
            return (
                <Filter
                    key={filter.priceRange}
                    id={filter.priceRange}
                    changeFilter={() => this.props.changePriceFilter(filter)}
                    inuse={filter.inuse}
                    disabled={filter.disabled}
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
            })} else {
                return <div>No products match the filter criteria selected above.</div>
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
    let products = state.products;
    let overviews = state.overviews;
    let overview = overviews.filter(
        overview => overview.type === ownProps.match.params.type
    )
    let filtered_products = products;
    filtered_products = filtered_products.filter(
        product => product.type === ownProps.match.params.type //gets type from the the route params and finds products which have type that matches
    )
    let activeBrandFilters = brandFilters.filter(
        item => item.inuse === true
    );
    activeBrandFilters.forEach(filter => {
        filtered_products = filtered_products.filter(
            product => product.brand === filter.brand
        )
    });
    let activePriceRangeFilters = priceRangeFilters.filter(
        item => item.inuse === true
    );
    activePriceRangeFilters.forEach(filter => {
        filtered_products = filtered_products.filter(
            product => product.priceRange === filter.priceRange
        );
    });
    return {
        overview: overview,
        brandFilters: filtered_brandFilters,
        priceRangeFilters: filtered_priceRangeFilters,
        products: filtered_products
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeBrandFilter: changeBrandFilter, changePriceFilter: changePriceFilter}, dispatch);
};

export const ProductsPageContainer = connect(mapStateToProps, matchDispatchToProps)(ProductsPage);