import React from 'react';
import {Link} from 'react-router-dom';
import ProductThumbCSS from './ProductThumb.css';

import productImage from '../product_images/kits/eleaf/istick.png';

class ProductThumb  extends React.Component{

    render () {
        return (
            <div className="productThumb col-md-3 col-xs-6">
                <Link to={this.props.link}><img className="thumbImage" src={this.props.productImage} /></Link>
                <p>{this.props.productName}</p>
                <p id="thumbPrice">{this.props.price}</p>
            </div>
        )
    }
};

export default ProductThumb;