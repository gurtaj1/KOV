import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';
import AccessoriesOverview from './AccessoriesOverview';
import ProductThumb from './ProductThumb';

var AccessoriesPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <AccessoriesOverview />
                </div>
                <div className = "thumbPalette col-md-12 col-xs-12">
                    <ProductThumb />
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

export default AccessoriesPage;