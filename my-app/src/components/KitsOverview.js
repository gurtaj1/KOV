import React from 'react';
import ReactDOM from 'react-dom';
import KitsOverviewCSS from './KitsOverview.css';

var KitsOverview = React.createClass({
    render: function() {
        return (
        <div className = "kitsOverviewBlock col-md-12 col-xs-12">
            <div className = "kitsOverviewText col-md-6 col-xs-12">
                <h1>VAPE KITS</h1>
                <p>Vape Kits are the complete bang for your buck package. Whether you are on the go, in need of a full system thats fine tuned to push every component to its fullest, or you want a full system but still want to incoorporate your own adjustments, Vape Kits are the one for you. They are ready to be juiced up straight out of the box and if you feel like changing certain components further down the line, then you have that option too!</p>
            </div>
            <div className = "kitsOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Kits.jpg" alt="Vape Kits Image" />
            </div>
        </div>
        )
    }
});

export default KitsOverview;