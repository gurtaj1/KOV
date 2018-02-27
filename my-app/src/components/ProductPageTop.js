import React from 'react';
import ReactDOM from 'react-dom';
import ProductPageCSS from './ProductPage.css';

class ProductPageTop extends React.Component {
    render() {
        return (
            <div>
                <div className="row title">
                    <h1>{this.props.productName}</h1>
                </div>
                <div className="row">
                    <div className="col-md-4 col-12">
                        <img className="productPageImage" src={this.props.productImage} />
                    </div>
                    <div className="col-md-8 col-12 productBreakdown">
                        <div className="productDescription">
                            <p>
                                {this.props.text}
                            </p>
                            <select className="btn btn-info dropdown-toggle colorDropdown">
                                <option value="black">Black</option>
                                <option value="silver">Silver</option>
                            </select>
                        </div>
                    </div>
                    <div className="add col-md-8">
                        <h2 id="productPagePrice">{this.props.price}</h2>
                        <button type="button" className="btn btn-danger" id="addToBasket" onClick={() => this.props.addProduct()}>
                            Add to Basket
                        </button>
                    </div>
                </div>
            </div>
        )}
}

export default ProductPageTop;