import React from 'react';
import ReactDOM from 'react-dom';
import BatteriesOverviewCSS from './BatteriesOverview.css';
import ProductThumb from './ProductThumb';

var BatteriesOverview = React.createClass({
    render: function() {
        return (
        <div className = "batteriesOverviewBlock col-md-12 col-xs-12">
            <div className = "batteriesOverviewText col-md-6 col-xs-12">
                <h1>VAPE Batteries</h1>
                <p>Add some power to your juice, you cant vape without it!</p>
            </div>
            <div className = "batteriesOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Batteries.jpg" alt="Vape Batteries Image" />
            </div>
        </div>
        )
    }
});

export default BatteriesOverview;