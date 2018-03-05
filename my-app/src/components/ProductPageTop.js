import React from 'react';

class ProductPageTop extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="title mx-auto">
                        <h1>{this.props.productName}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-12 mx-auto">
                        <div className="productPageImage">
                            <img src={this.props.productImage} alt="product"/>
                        </div>
                    </div>
                    <div className="col-md-8 col-11 mx-auto productBreakdown">
                        <div className="row">
                            <div className="col-12">
                                <div className="productDescription">
                                    <p>
                                        {this.props.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="add col-12">
                            <h2 id="productPagePrice">{this.props.price}</h2>
                            <button type="button" className="btn btn-primary" id="addToBasket" onClick={() => this.props.addProduct()}>
                                Add to Basket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default ProductPageTop;