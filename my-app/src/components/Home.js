import React from 'react';

import HomeCSS from './Home.css';

import KitsBannerSmoke from '../product_images/kits/kitsbannersmoke.jpg';
import KitsBannerSmokePattern from '../product_images/kits/kitsbannersmokepattern.jpg';
import KitsBannerPattern from '../product_images/kits/kitsbannerpattern.jpg';
import TanksBannerSmoke from '../product_images/tanks/tanksbannersmoke.jpg';
import TanksBannerSmokePattern from '../product_images/tanks/tanksbannersmokepattern.jpg';
import TanksBannerPattern from '../product_images/tanks/tanksbannerpattern.jpg';
import ELiquidsBannerSmoke from '../product_images/flavours/eliquidsbannersmoke.jpg';
import ELiquidsBannerSmokePattern from '../product_images/flavours/eliquidsbannersmokepattern.jpg';
import ELiquidsBannerPattern from '../product_images/flavours/eliquidsbannerpattern.jpg';
import HomeBannerSmoke from '../product_images/home/homebannersmoke.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="myCarousel" className="carousel slide col-10 mx-auto" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={HomeBannerSmoke} alt="pic1" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={TanksBannerPattern} alt="pic2" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={ELiquidsBannerSmoke} alt="pic3" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={KitsBannerPattern} alt="pic4" />
                            </div>
                        </div>

                        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;