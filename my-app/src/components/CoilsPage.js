import React from 'react';

import CoilsOverview from './CoilsOverview';
import ProductThumb from './ProductThumb';

import CleitoCoilImage from '../product_images/coils/aspire/cleito.png';
import CleitoExoCoilImage from '../product_images/coils/aspire/cleitoexo.jpg';
import EnduraT18eCoilImage from '../product_images/coils/innokin/endurat18e.png';
import SlipstreamCoilImage from '../product_images/coils/innokin/slipstream.png';
import ISubCoilImage from '../product_images/coils/isub/isub.png';
import KangertechDualCoilImage from '../product_images/coils/kangertech/kangertechdual.jpg';
import OccCoilImage from '../product_images/coils/kangertech/kangertechocc.jpg';
import StickA10CoilImage from '../product_images/coils/smok/sticka10coil.jpg';
import CCellGdCoilImage from '../product_images/coils/vaporesso/ccellgd.jpg';
import EucTraditionalCoilImage from '../product_images/coils/vaporesso/euctraditional.jpg';

var CoilsPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <CoilsOverview />
                </div>
                <div className = "thumbPalette col-md-12 col-xs-12">
                    <div className="row">
                        <ProductThumb productImage={CleitoCoilImage} productName="CLEITO COIL" price="£PRICE" link="/coils:cleito"/>
                        <ProductThumb productImage={CleitoExoCoilImage} productName="CLEITO EXO COIL" price="£PRICE" link="/coils:cleitoexo"/>
                        <ProductThumb productImage={EnduraT18eCoilImage} productName="ENDURA T18E COIL" price="£PRICE" link="/coils:endurat18e"/>
                        <ProductThumb productImage={SlipstreamCoilImage} productName="SLIPSTREAM COIL" price="£PRICE" link="/coils:slipstream"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={ISubCoilImage} productName="ISUB COIL" price="£PRICE" link="/coils:isub"/>
                        <ProductThumb productImage={KangertechDualCoilImage} productName="KANGERTECH DUAL COIL" price="£PRICE" link="/coils:kangertechdual"/>
                        <ProductThumb productImage={OccCoilImage} productName="OCC COIL" price="£PRICE" link="/coils:occ"/>
                        <ProductThumb productImage={StickA10CoilImage} productName="STICK A10 COIL" price="£PRICE" link="/coils:sticka10"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={CCellGdCoilImage} productName="CCELL GD COIL" price="£PRICE" link="/coils:ccellgd"/>
                        <ProductThumb productImage={EucTraditionalCoilImage} productName="EUC TRADITIONAL COIL" price="£PRICE" link="/coils:euctraditional"/>
                    </div>
                </div>
              </div>
            </div>
        )
    }
});

export default CoilsPage;