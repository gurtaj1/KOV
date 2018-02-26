import React from 'react';
import {Link} from 'react-router-dom';


class BasketProductsListItem  extends React.Component{
    render () {
        return (
            <div className="basketProductItem col-md-12 col-12">
                <div className="basketProductThumb">
                    <Link to={this.props.link}><img className="basketProductImage" src={this.props.image}/></Link>
                    <p className="basketProductPoint">{this.props.model.toUpperCase()}</p>
                </div>
                <div className="basketProductAPB">
                    <p className="basketProductPoint">{"Qty:"+this.props.qty}</p>
                    <div className="addOrRemove">
                        <button className="btn btn-outline-primary qtyInc" onClick={() => this.props.removeProduct()}>-</button>
                        <button className="btn btn-outline-primary qtyInc" onClick={() => this.props.addProduct()}>+</button>
                    </div>
                    <p className="basketProductPoint" id="basketProductPrice">{"£"+this.props.price*this.props.qty}</p>
                </div>
            </div>
        )
    }
};

export default BasketProductsListItem;