import React from 'react';

class BasketCheckout extends React.Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="totalHeader mr-auto">
                        <h3>TOTAL</h3>
                    </div>
                    <div className="totalBasketPrice ml-auto">
                        <h3>£{this.props.total}</h3>
                    </div>
                </div>
                <div className="row checkout">
                    <button className="btn btn-success btn-lg col-12 col-sm-6 col-md-3 ml-auto" disabled={true}>CHECKOUT</button>
                </div>
            </div>
    )
    }
}

export default BasketCheckout;