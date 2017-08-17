import React from 'react';
import ReactDOM from 'react-dom';
import NavComponent from './NavComponent';
import RebuildablesOverview from './RebuildablesOverview';
import ProductThumb from './ProductThumb';

var RebuildablesPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <RebuildablesOverview />
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

export default RebuildablesPage;