import React from 'react';
import ReactDOM from 'react-dom';
import ProductPageCSS from './ProductPage.css';
import {Link} from 'react-router-dom';

class ProductPageBottom extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="otherProductReminder col-md-4 col-12">
                    <Link to={this.props.link1}><img src={this.props.image1} alt={this.props.alt1}/></Link>
                </div>
                <div className="otherProductReminder col-md-4 col-12">
                    <Link to={this.props.link2}><img src={this.props.image2} alt={this.props.alt2}/></Link>
                </div>
                <div className="otherProductReminder col-md-4 col-12">
                    <Link to={this.props.link3}><img src={this.props.image3} alt={this.props.alt3}/></Link>
                </div>
            </div>
        )
    }
}

export default ProductPageBottom;