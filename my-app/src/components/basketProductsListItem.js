import React from 'react';
import {Link} from 'react-router-dom';
import ProductThumbCSS from './ProductThumb.css';

class BasketProductsListItem  extends React.Component{
    render () {
        return (
            <div className="productThumb col-md-3 col-xs-6">
                <div className="row">
                    <Link to={this.props.link}><img className="productThumbImage" src={this.props.image}/></Link>
                    <p>{this.props.model.toUpperCase()}</p>
                    <p>{"Qty:"+this.props.qty}</p>
                    <p id="thumbPrice">{"£"+this.props.price*this.props.qty}</p>
                    <div className="addOrRemove">
                        <button onClick={() => this.props.removeProduct()}>-</button>
                        <button onClick={() => this.props.addProduct()}>+</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default BasketProductsListItem;