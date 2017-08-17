import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import changeBrandFilter from '../actions/changeBrandFilter';
import changePriceFilter from '../actions/changePriceFilter';

import KitsOverview from './KitsOverview';
import Filter from './Filter';
import ProductsListItem from './ProductsListItem';
import FilterCSS from './Filter.css';

class KitsPage extends React.Component{
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
    createKitsProductsList() {
        if(this.props.products.length > 0) {
            return this.props.products.map(product =>{
                return (
                    <ProductsListItem
                        key={product.id}
                        brand={product.brand}
                        model={product.model}
                        price={product.price}
                        image={product.image}
                        link={"/kitproducts/"+product.id}
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
                <div className="row">
                    <KitsOverview />
                </div>
                <div className="row">
                    <div className="filtersList col-md-6 col-xs-12">
                        Filter by Brand:
                        <div>
                            {this.createBrandFilterList()}
                        </div>
                    </div>
                    <div className="filtersList col-md-6 col-xs-12">
                        Filter by Price Range:
                        <div>
                            {this.createPriceRangeFilterList()}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div>
                        {this.createKitsProductsList()}
                    </div>
                </div>
              </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    let brandFilters = state.kitsBrandFilters;
    let priceRangeFilters = state.kitsPriceRangeFilters;
    let products = state.kitsProducts;
    let filtered_products = products;
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
    brandFilters: brandFilters,
    priceRangeFilters: priceRangeFilters,
    products: filtered_products
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({changeBrandFilter: changeBrandFilter, changePriceFilter: changePriceFilter}, dispatch);
};

export const KitsPageContainer = connect(mapStateToProps, matchDispatchToProps)(KitsPage);