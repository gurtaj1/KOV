import React from 'react';

import TanksOverview from './TanksOverview';
import ProductThumb from './ProductThumb';

import BritMiniImage from '../product_images/tanks/smok/britmini.jpg';
import CleitoExoImage from '../product_images/tanks/aspire/cleitoexo.jpg';
import Tfv8BabyImage from '../product_images/tanks/smok/tfv8baby.jpg';
import RafaleImage from '../product_images/tanks/uwell/rafale.jpg';

var TanksPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <TanksOverview />
                </div>
                <div className = "thumbPalette col-md-12 col-xs-12">
                    <div className="row">
                        <ProductThumb productImage={BritMiniImage} productName="BRIT MINI" price="£PRICE" link="/tanks:britmini"/>
                        <ProductThumb productImage={CleitoExoImage} productName="CLEITO EXO" price="£PRICE" link="/tanks:cleitoexo"/>
                        <ProductThumb productImage={Tfv8BabyImage} productName="TFV8 BABY" price="£PRICE" link="/tanks:tfv8baby"/>
                        <ProductThumb productImage={RafaleImage} productName="RAFALE" price="£PRICE" link="/tanks:rafale"/>
                    </div>
                </div>
              </div>
            </div>
        )
    }
});

export default TanksPage;