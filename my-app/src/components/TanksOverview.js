import React from 'react';
import ReactDOM from 'react-dom';
import TanksOverviewCSS from './TanksOverview.css';
import ProductThumb from './ProductThumb';

var TanksOverview = React.createClass({
    render: function() {
        return (
        <div className = "tanksOverviewBlock col-md-12 col-xs-12">
            <div className = "tanksOverviewText col-md-6 col-xs-12">
                <h1>VAPE TANKS</h1>
                <p>Vape Tanks come in all shapes in sizes. They provide the main thing we all want; the vapour! They are by far the easiest things to use. With On-the-go refills when you need a quick top-up and on-the-go coil replacement when you are in need of a fresh breath of vape. We have all types of Tanks for all types of vapers, browse through and see which one best suits you!</p>
            </div>
            <div className = "tanksOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Tanks.jpg" alt="Vape Tanks Image" />
            </div>
        </div>
        )
    }
});

export default TanksOverview;