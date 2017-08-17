import React from 'react';
import ReactDOM from 'react-dom';
import ModsOverviewCSS from './ModsOverview.css';
import ProductThumb from './ProductThumb';

var ModsOverview = React.createClass({
    render: function() {
        return (
        <div className = "modsOverviewBlock col-md-12 col-xs-12">
            <div className = "modsOverviewText col-md-6 col-xs-12">
                <h1>MODS</h1>
                <p>Vape Mods hold all the power and all control! Whether you prefer to control your puffs based on temperature, voltage, or wattage, or if you like to go even further into it and assess just how many puffs you are getting out of a full tank of your favourite juice, you can rest assured that the King of Vape has a Mod for you!</p>
            </div>
            <div className = "modsOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Mods.jpg" alt="Vape Mods Image" />
            </div>
        </div>
        )
    }
});

export default ModsOverview;