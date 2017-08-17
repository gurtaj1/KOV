import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import addToBasket from '../actions/addToBasket';

import ProductPage from './ProductPage';

class KitProductPage extends React.Component {
    createProductPageComponent() {
        let activeProduct = this.props.products.filter(product => product.id === this.props.match.params.productid)
        return activeProduct.map(product =>{
            return (
                <ProductPage
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
    render () {
        return (
            <div className="container">
                <div>
                    {this.createProductPageComponent()}
                </div>
                <div className="row">
                    <div className="otherProductReminder col-md-6 col-xs-12">
                        <Link to="/eliquids"><img src="" alt="Don't forget your E-Liquid"/></Link>
                    </div>
                    <div className="otherProductReminder col-md-6 col-xs-12">
                        <Link to="/coils"><img src="" alt="Don't forget your coils"/></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let products = state.kitsProducts;
    let temp_products = products;
    return {
    products: temp_products
    };
};

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToBasket: addToBasket}, dispatch);
};

export const KitProductPageContainer = connect(mapStateToProps, matchDispatchToProps)(KitProductPage);