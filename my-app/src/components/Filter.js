import React from 'react';

var Filter = React.createClass({
    render: function() {
        return(
            <div className="filter col-md-4 col-6">
                <input type="radio"
                    defaultChecked={this.props.inuse}
                    name={this.props.name}
                    onClick={() => this.props.changeFilterResetPageNumber()}
                    />
                {'\u00A0'}{'\u00A0'}
                <label ref="text">{this.props.id}</label>
            </div>
        )
    }
});

export default Filter;