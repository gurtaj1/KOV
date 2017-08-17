import React from 'react';

import ELiquidsOverview from './ELiquidsOverview';
import ProductThumb from './ProductThumb';

import BlueberryCupcakeImage from '../product_images/flavours/grumpymonkey/blueberrycupcake.jpg';
import BlueSlushImage from '../product_images/flavours/grumpymonkey/blueslush.jpg';
import KillerCustardImage from '../product_images/flavours/grumpymonkey/killercustard.jpg';
import MothersMilkImage from '../product_images/flavours/grumpymonkey/mothersmilk.jpg';
import PinkCrystalImage from '../product_images/flavours/grumpymonkey/pinkcrystal.jpg';
import SpearmintImage from '../product_images/flavours/grumpymonkey/spearmint.jpg';
import ScreamoMangoImage from '../product_images/flavours/monstavape/screamomango3pack.jpg';
import LightningLemonImage from '../product_images/flavours/mrcloud/lightninglemon.jpg';
import LycheeTwisterImage from '../product_images/flavours/mrcloud/lycheetwister.jpg';
import MonsoonMangoImage from '../product_images/flavours/mrcloud/monsoonmango.jpg';
import OrangeDrizzleImage from '../product_images/flavours/mrcloud/orangedrizzle.jpg';
import BubblegumImage from '../product_images/flavours/omg/bubblegum.jpg';
import BlackcurrantAndLiquoriceImage from '../product_images/flavours/picknmix/blackcurrantandliquorice.png';
import BlackJacksImage from '../product_images/flavours/picknmix/blackjacks.png';
import CherryLipsImage from '../product_images/flavours/picknmix/cherrylips.png';
import FoamBananasImage from '../product_images/flavours/picknmix/foambananas.png';
import SourCherriesImage from '../product_images/flavours/picknmix/sourcherries.png';
import StrawberryBeltsImage from '../product_images/flavours/picknmix/strawberrybelts.png';
import StrawberryMilkshakesImage from '../product_images/flavours/picknmix/strawberrymilkshakes.png';
import VanillaFudgeImage from '../product_images/flavours/picknmix/vanillafudge.png';
import BensGnSImage from '../product_images/flavours/vado/bensgns.jpg';
import BlackcurrantImage from '../product_images/flavours/vado/blackcurrant.jpg';
import BlackIceImage from '../product_images/flavours/vado/blackice.jpg';
import BlueberryImage from '../product_images/flavours/vado/blueberry.jpg';
import CherryImage from '../product_images/flavours/vado/cherry.jpg';
import ClassicTobaccoImage from '../product_images/flavours/vado/classictobacco.jpg';
import IceMintImage from '../product_images/flavours/vado/icemint.jpg';
import PremiumTobaccoImage from '../product_images/flavours/vado/premiumtobacco.jpg';
import Spearmint1Image from '../product_images/flavours/vado/spearmint.jpg';
import StrawberryImage from '../product_images/flavours/vado/strawberry.jpg';
import WatermelonImage from '../product_images/flavours/vado/watermelon.jpg';

var ELiquidsPage = React.createClass({
    render: function() {
        return (
            <div>
              <div>
              </div>
              <div className="container">
                <div className="row">
                    <ELiquidsOverview />
                </div>
                <div className = "thumbPalette col-md-12 col-xs-12">
                    <div className="row">
                        <ProductThumb productImage={BlueberryCupcakeImage} productName="BLUEBERRY CUPCAKE" price="£PRICE" link="/eliquids:blueberrycupcake"/>
                        <ProductThumb productImage={BlueSlushImage} productName="BLUE SLUSH" price="£PRICE" link="/eliquids:blueslush"/>
                        <ProductThumb productImage={KillerCustardImage} productName="KILLER CUSTARD" price="£PRICE" link="./eliquids:killercustard"/>
                        <ProductThumb productImage={MothersMilkImage} productName="MOTHERS MILK" price="£PRICE" link="./eliquids:mothersmilk"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={PinkCrystalImage} productName="PINK CRYSTAL" price="£PRICE" link="/eliquids:pinkcrystal"/>
                        <ProductThumb productImage={SpearmintImage} productName="SPEARMINT" price="£PRICE" link="/eliquids:blueberrycupcake"/>
                        <ProductThumb productImage={ScreamoMangoImage} productName="SCREAMO MANGO" price="£PRICE" link="/eliquids:screamomango"/>
                        <ProductThumb productImage={LightningLemonImage} productName="LIGHTNING LEMON" price="£PRICE" link="/eliquids:lightninglemon"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={LycheeTwisterImage} productName="LYCHEE TWISTER" price="£PRICE" link="/eliquids:lycheetwister"/>
                        <ProductThumb productImage={MonsoonMangoImage} productName="MONSOON MANGO" price="£PRICE" link="/eliquids:monsoonmango"/>
                        <ProductThumb productImage={OrangeDrizzleImage} productName="ORANGE DRIZZLE" price="£PRICE" link="/eliquids:orangedrizzle"/>
                        <ProductThumb productImage={BubblegumImage} productName="BUBBLEGUM" price="£PRICE" link="/eliquids:bubblegum"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={BlackcurrantAndLiquoriceImage} productName="BLACKCURRANT AND LIQUORICE" price="£PRICE" link="/eliquids:blackcurrantandliquorice"/>
                        <ProductThumb productImage={BlackJacksImage} productName="BLACK JACKS" price="£PRICE" link="/eliquids:blackjacks"/>
                        <ProductThumb productImage={CherryLipsImage} productName="CHERRY LIPS" price="£PRICE" link="/eliquids:cherrylips"/>
                        <ProductThumb productImage={BlueberryCupcakeImage} productName="BLUEBERRY CUPCAKE" price="£PRICE" link="/eliquids:blueberrycupcake"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={FoamBananasImage} productName="FOAM BANANAS" price="£PRICE" link="/eliquids:foambananas"/>
                        <ProductThumb productImage={SourCherriesImage} productName="SOUR CHERRIES" price="£PRICE" link="/eliquids:sourcherries"/>
                        <ProductThumb productImage={StrawberryBeltsImage} productName="STRAWBERRY BELTS" price="£PRICE" link="/eliquids:strawberrybelts"/>
                        <ProductThumb productImage={StrawberryMilkshakesImage} productName="STRAWBERRY MILKSHAKES" price="£PRICE" link="/eliquids:strawberrymilkshakes"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={VanillaFudgeImage} productName="VANILLA FUDGE" price="£PRICE" link="/eliquids:vanillafudge"/>
                        <ProductThumb productImage={BensGnSImage} productName="BENS G+S" price="£PRICE" link="/eliquids:bensg+s"/>
                        <ProductThumb productImage={BlackcurrantImage} productName="BLACKCURRANT" price="£PRICE" link="/eliquids:blackcurrant"/>
                        <ProductThumb productImage={BlackIceImage} productName="BLACK ICE" price="£PRICE" link="/eliquids:blackice"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={BlueberryImage} productName="BLUEBERRY" price="£PRICE" link="/eliquids:blueberry"/>
                        <ProductThumb productImage={CherryImage} productName="CHERRY" price="£PRICE" link="/eliquids:cherry"/>
                        <ProductThumb productImage={ClassicTobaccoImage} productName="CLASSIC TOBACCO" price="£PRICE" link="/eliquids:classictobacco"/>
                        <ProductThumb productImage={IceMintImage} productName="ICE MINT" price="£PRICE" link="/eliquids:icemint"/>
                    </div>
                    <div className="row">
                        <ProductThumb productImage={PremiumTobaccoImage} productName="PREMIUM TOBACCO" price="£PRICE" link="/eliquids:premiumtobacco"/>
                        <ProductThumb productImage={Spearmint1Image} productName="SPEARMINT" price="£PRICE" link="/eliquids:spearmint"/>
                        <ProductThumb productImage={StrawberryImage} productName="STRAWBERRY" price="£PRICE" link="/eliquids:strawberry"/>
                        <ProductThumb productImage={WatermelonImage} productName="WATERMELON" price="£PRICE" link="/eliquids:watermelon"/>
                    </div>                    
                </div>
              </div>
            </div>
        )
    }
});

export default ELiquidsPage;