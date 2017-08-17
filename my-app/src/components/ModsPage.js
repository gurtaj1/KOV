import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';
import ModsOverview from './ModsOverview';
import ProductThumb from './ProductThumb';

var ModsPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <ModsOverview />
                </div>
                <div className = "thumbPalette col-md-12 col-xs-12">
                    <ProductThumb />
                    <ProductThumb />
                    <ProductThumb />
                    <ProductThumb />
                    <ProductThumb />
                    <ProductThumb />
                    <ProductThumb />
                </div>
              </div>
            </div>
        )
    }
});

export default ModsPage;