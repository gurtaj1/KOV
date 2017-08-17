import React from 'react';
import ReactDOM from 'react-dom';
import RebuildablesOverviewCSS from './RebuildablesOverview.css';
import ProductThumb from './ProductThumb';

var RebuildablesOverview = React.createClass({
    render: function() {
        return (
        <div className = "rebuildablesOverviewBlock col-md-12 col-xs-12">
            <div className = "rebuildablesOverviewText col-md-6 col-xs-12">
                <h1>REBUILDABLES</h1>
                <p>Rebauildables come in two types. The Drippers (RDA's) and the Tanks (RTA's). These are not the same tanks that the King has in the Tanks section. These Rebuildable Tanks and Rebuildable Drippers do not limit you to premade coils. With these Rebuildables you can pick just exactly how many coils, what type of coil, and what type of wick, you would like to use inorder to produce that juicy falvoursome vapour that we all love so much!</p>
            </div>
            <div className = "rebuildablesOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_Rebuildables.jpg" alt="Vape Rebuildables Image" />
            </div>
        </div>
        )
    }
});

export default RebuildablesOverview;