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
                    key={this.props.match.params.productid+"reminders"}
                    link1={overview.link1}
                    image1={overview.imageSource1}
                    alt1={overview.imageAlt1}
                    link2={overview.link2}
                    image2={overview.imageSource2}
                    alt2={overview.imageAlt2}
                    link3={overview.link3}
                    image3={overview.imageSource3}
                    alt3={overview.imageAlt3}
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToBasket: addToBasket}, dispatch);
};

export const ProductPageContainer = connect(mapStateToProps, mapDispatchToProps)(ProductPage);