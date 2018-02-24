import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import addToBasket from '../actions/addToBasket';

import ProductPageTop from './ProductPageTop';
import ProductPageBottom from './ProductPageBottom';

class ProductPage extends React.Component {
    createProductPageTop() {
        return this.props.activeProduct.map(product =>{
            return (
                <ProductPageTop
                    key={product.id}
                    productName={product.brand.toUpperCase()+" "+product.model.toUpperCase()}
                    price={"£"+product.price}
                    productImage={product.image}
                    text={product.text}
                    addProduct={() => this.props.addToBasket(product)}
                />
            )
        })
    }
    createProductPageBottom() {
        return this.props.activeOverview.map(overview =>{
            return (
                <ProductPageBottom 
                    link1={overview.link1}
                    image1={overview.imageSource1}
                    alt1={overview.imageAlt1}
                    link2={overview.link2}
                    image2={overview.imageSource2}
                    alt2={overview.imageAlt2}
                />
            )
        })
    }
    render () {
        return (
            <div className="container">
                <div>
                    {this.createProductPageTop()}
                </div>
                <div>
                    {this.createProductPageBottom()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    let products = state.products;
    let activeProduct = products;
    activeProduct = activeProduct.filter(product => product.id === ownProps.match.params.productid); //productid being the end part of the url
    let overviews = state.overviews;
    let activeOverview = overviews;
    activeOverview = activeOverview.filter(overview => overview.type === ownProps.match.params.type);
    return {
    activeProduct: activeProduct,
    activeOverview: activeOverview
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToBasket: addToBasket}, dispatch);
};

export const ProductPageContainer = connect(mapStateToProps, matchDispatchToProps)(ProductPage);