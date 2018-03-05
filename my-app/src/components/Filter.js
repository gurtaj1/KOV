import React from 'react';

class Filter extends React.Component{
    render () {
        return(
            <div className="filter col-md-4 col-6">
                <input type="radio"
                    defaultChecked={this.props.inuse}
                    name={this.props.name}
                    onClick={() => this.props.onFilterClick()} //action creator passed down from container component
                    />
                {'\u00A0'}{'\u00A0'}
                <label ref="text">{this.props.id}</label>
            </div>
        )
    }
};

export default Filter;