import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';
import BatteriesOverview from './BatteriesOverview';
import ProductThumb from './ProductThumb';

import Efest3000BatteryImage from '../product_images/batteries/efest3000mah.jpg';
import Samsung2500BatteryImage from '../product_images/batteries/samsung2500mah.jpg';

var BatteriesPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <BatteriesOverview />
                </div>
                <div className = "thumbPalette col-md-12 col-xs-12">
                    <div className="row">
                        <ProductThumb productImage={Efest3000BatteryImage} productName="EFEST 3000MAH BATTERY" price="£PRICE" link="/batteries:efest3500"/>
                        <ProductThumb productImage={Samsung2500BatteryImage} productName="SAMSUNG 2500MAH BATTERY" price="£PRICE" link="/batteries:samsung2500"/>
                    </div>
                </div>
              </div>
            </div>
        )
    }
});

export default BatteriesPage;