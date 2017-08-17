import React from 'react';
import ReactDOM from 'react-dom';
import CoilsOverviewCSS from './CoilsOverview.css';
import ProductThumb from './ProductThumb';

var CoilsOverview = React.createClass({
    render: function() {
        return (
        <div className = "CoilsOverviewBlock col-md-12 col-xs-12">
            <div className = "CoilsOverviewText col-md-6 col-xs-12">
                <h1>COILS</h1>
                <p>Coils are a tanks best friend. After so many puffs, the wick which is used to absorb the juice and pass it onto some real heat, eventually dies out. When this happens a new coil (with wick) is introduced to replenish the whole tank back to brand new!</p>
            </div>
            <div className = "CoilsOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Coils.jpg" alt="Vape Coils Image" />
            </div>
        </div>
        )
    }
});

export default CoilsOverview;