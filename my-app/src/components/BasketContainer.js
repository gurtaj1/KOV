import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import addToBasket from '../actions/addToBasket';
import removeFromBasket from '../actions/removeFromBasket';

import BasketProductsListItem from './basketProductsListItem';
import BasketCheckout from './BasketCheckout';

class Basket  extends React.Component {
    createBasketProductsList () {
        if(this.props.products.length > 0) {
            return this.props.products.map(product =>{
                return (
                    <BasketProductsListItem
                        key={product.id}
                        brand={product.brand}
                        model={product.model}
                        qty={product.qty}
                        price={product.price}
                        image={product.image}
                        link={"/kitproducts/"+product.id}
                        addProduct={() => this.props.addToBasket(product)}
                        removeProduct={() => this.props.removeFromBasket(product)}
                    />
                )
        })} else {
            return <div id="emptyBasket">Basket is empty.</div>
        }
    }
    createCheckout () {
        var total = this.props.products.reduce(function(acc, product){
            var subTotal = product.qty*product.price;
            acc += subTotal;
            return acc;
        },0);
        if(total === 0){
            return "";
        } else {
            return (
                <BasketCheckout
                    total={total}
                />
            ) 
        }
    }
    render () {
        return (
            <div className="container">
                <div className="row">
                    <h2 id="basketHeader">Your Basket</h2>
                </div>
                <div className="row">
                    {this.createBasketProductsList()}
                </div>
                <div className="row">
                    {this.createCheckout()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    let products_list = state.basketProducts
    return {
    products: products_list
    };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({addToBasket: addToBasket, removeFromBasket: removeFromBasket}, dispatch);
};

export const BasketContainer = connect(mapStateToProps, mapDispatchToProps)(Basket);