import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import addToBasket from '../actions/addToBasket';
import removeFromBasket from '../actions/removeFromBasket';

import BasketProductsListItem from './basketProductsListItem';

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
                return <div>No products have been added.</div>
            }
    }
    render () {
        return (
            <div>
                <h3>Your Basket</h3>
                <div>
                    {this.createBasketProductsList()}
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

function matchDispatchToProps(dispatch){
    return bindActionCreators({addToBasket: addToBasket, removeFromBasket: removeFromBasket}, dispatch);
};

export const BasketContainer = connect(mapStateToProps, matchDispatchToProps)(Basket);