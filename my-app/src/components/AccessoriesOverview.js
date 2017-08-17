import React from 'react';
import ReactDOM from 'react-dom';
import AccessoriesOverviewCSS from './AccessoriesOverview.css';
import ProductThumb from './ProductThumb';

var AccessoriesOverview = React.createClass({
    render: function() {
        return (
        <div className = "accessoriesOverviewBlock col-md-12 col-xs-12">
            <div className = "accessoriesOverviewText col-md-6 col-xs-12">
                <h1>VAPE ACCESSORIES</h1>
                <p>Accessories come in all shapes and sizes</p>
            </div>
            <div className = "accessoriesOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Accessories.jpg" alt="Vape Accessories Image" />
            </div>
        </div>
        )
    }
});

export default AccessoriesOverview;