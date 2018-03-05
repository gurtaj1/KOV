import React from 'react';

class CategoryOverview extends React.Component{
    render () {
        return (
            <div className = "row categoryOverviewBlock">
                <div className = "categoryOverviewText col-md-6 col-12">
                    <h1>{this.props.title.toUpperCase()}</h1>
                    <p>{this.props.text}</p>
                </div>
                <div className = "categoryOverviewImg col-md-6 col-12">
                    <img src={this.props.image} alt={this.props.alt} />
                </div>
            </div>
        )
    }
};

export default CategoryOverview;