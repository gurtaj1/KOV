import React from 'react';

var Dropdown = React.createClass({
    render: function() {
        return(
            <div className="filter col-md-4 col-6">
                <input type="checkbox"
                    disabled={this.props.disabled}
                    id={this.props.id}
                    defaultChecked={this.props.inuse}
                    onClick={() => this.props.changeFilter()}
                    />
                {'\u00A0'}{'\u00A0'}
                <label ref="text">{this.props.id}</label>
            </div>
        )
    }
});

export default Dropdown;