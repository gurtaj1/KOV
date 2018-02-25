import React from 'react';
import {Link} from 'react-router-dom';
import ProductListItemCSS from './ProductListItem.css';

class ProductsListItem  extends React.Component{
    render () {
        return (
            <div className="productThumb col-md-3 col-6">
                <Link to={this.props.link}><img className="productThumbImage" src={this.props.image}/></Link>
                <p>{this.props.model.toUpperCase()}</p>
                <p id="thumbPrice">{"£"+this.props.price}</p>
            </div>
        )
    }
};

export default ProductsListItem;