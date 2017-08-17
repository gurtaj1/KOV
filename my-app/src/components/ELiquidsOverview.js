import React from 'react';
import ReactDOM from 'react-dom';
import ELiquidsOverviewCSS from './ELiquidsOverview.css';

var ELiquidsOverview = React.createClass({
    render: function() {
        return (
        <div className = "eLiquidsOverviewBlock col-md-12 col-xs-12">
            <div className = "eLiquidsOverviewText col-md-6 col-xs-12">
                <h1>E-Liquids</h1>
                <p>E-Liquids are what provide that juicy flavour, and the nicotine too if that's what you're after! Sometimes you dont want the same flavour all day sometimes you want to switch it up. Here at King of Vape we like mixing things up and for that reason we have a huge variety of different flavours to keep those taste buds tingling!</p>
            </div>
            <div className = "eLiquidsOverviewImg col-md-6 col-xs-12">
                <img src="https://www.ukecigstore.com/media/catalog/category/Cat_Banner_-_Vape_ELiquids.jpg" alt="Vape ELiquids Image" />
            </div>
        </div>
        )
    }
});

export default ELiquidsOverview;