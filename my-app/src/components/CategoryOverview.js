import React from 'react';
import ReactDOM from 'react-dom';
import CategoryOverviewCSS from './CategoryOverview.css';

var CategoryOverview = React.createClass({
    render: function() {
        return (
        <div className = "categoryOverviewBlock col-md-12 col-xs-12">
            <div className = "categoryOverviewText col-md-6 col-xs-12">
                <h1>{this.props.title.toUpperCase()}</h1>
                <p>{this.props.text}</p>
            </div>
            <div className = "categoryOverviewImg col-md-6 col-xs-12">
                <img src={this.props.image} alt={this.props.alt} />
            </div>
        </div>
        )
    }
});

export default CategoryOverview;