import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'; 

import KitsBannerPattern from '../product_images/kits/kitsbannerpattern.jpg';
import TanksBannerPattern from '../product_images/tanks/tanksbannerpattern.jpg';
import ELiquidsBannerSmoke from '../product_images/flavours/eliquidsbannersmoke.jpg';
import HomeBannerSmoke from '../product_images/home/homebannersmoke.jpg';

import TanksCat from '../product_images/tanks/tankscat.jpg';
import EliquidsCat from '../product_images/flavours/eliquidscat.jpg';
import KitsCat from '../product_images/kits/kitscat.jpg';
import ModsCat from '../product_images/modscat.jpg';

class Home extends React.Component {
	smallHomeIntroToggle () {
            var smallHomeIntro = document.querySelector('.smallHomeIntro');
            var pullDownTop = document.querySelector('.pullDownTop');
            var pullUpTop = document.querySelector('.pullUpTop');
			if ($('.smallHomeIntro').css("display") === 'block') {
                $('.smallHomeIntro').slideUp();
                $('.pullUpTop').css({"display": "none"});
                $('.pullDownTop').css({"display": "block"});
			} else {
                $('.smallHomeIntro').slideDown();
                $('.pullUpTop').css({"display": "block"});
                $('.pullDownTop').css({"display": "none"});
			}
    }
    render() {
        return (
            <div className="container">

                <div className="homeHeadBig">
                    <div className="row text-center">
                        <div className="col-12 mx-auto homeHeader">
                            <h1>KING OF VAPE</h1>
                        </div>
                        <div className="col-12">
                            <div className="underlinerOutside">
                                <div className="underlinerInside">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="bigHomeIntro">
                            <div className="col-10 mx-auto">
                                ..the Kingdom for True Vapers. Here at King Of Vape we pride ourselves on knowing just what every kind of vaper needs, and also in having a vast range of products that satisfies such needs. Whether you be a Cloud Chaser or a Flavour Connoisseur, after an Update on your Kit, looking for a Fresh, new, Mouth Watering Flavour, or simply just after a quick Craving Quencher, we've got just what you need! And if, for some bizarre reason,  we don't have what you need, we assure you that we are certainly in the process of getting it! Don't just take our word for it though, have a browse through our online catalogue or even come into the store for a perusal and some pointers if you like, we promise we won't bite!
                            </div>
                            <div className="col-12">
                                <div className="underlinerOutside">
                                    <div className="underlinerInside">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="homeHeadSmall">
                    <div className="row text-center">
                        <div className="col-12 mx-auto homeHeader">
                            <h1>KING OF VAPE</h1>
                        </div>
                        <div className="col-12">
                            <div className="activeUnderliner" onClick={this.smallHomeIntroToggle}>
                                <div className="underlinerInside">
                                    <i className="pullDownTop fa fa-chevron-down"></i>
                                    <i className="pullUpTop fa fa-chevron-up"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="smallHomeIntro">
                            <div className="col-10 mx-auto">
                                ..the Kingdom for True Vapers. Here at King Of Vape we pride ourselves on knowing just what every kind of vaper needs, and also in having a vast range of products that satisfies such needs. Whether you be a Cloud Chaser or a Flavour Connoisseur, after an Update on your Kit, looking for a Fresh, new, Mouth Watering Flavour, or simply just after a quick Craving Quencher, we've got just what you need! And if, for some bizarre reason,  we don't have what you need, we assure you that we are certainly in the process of getting it! Don't just take our word for it though, have a browse through our online catalogue or even come into the store for a perusal and some pointers if you like, we promise we won't bite!
                            </div>
                            <div className="col-12">
                                <div className="activeUnderliner" onClick={this.smallHomeIntroToggle}>
                                    <div className="underlinerInside">
                                        <i className="pullUpBottom fa fa-chevron-up"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div id="myCarousel" className="carousel slide col-11 mx-auto" data-ride="carousel">
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
                                <Link to="/products/tanks"><img className="d-block w-100" src={TanksBannerPattern} alt="pic2" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link to="/products/eliquids"><img className="d-block w-100" src={ELiquidsBannerSmoke} alt="pic3" /></Link>
                            </div>
                            <div className="carousel-item">
                                <Link to="/products/kits"><img className="d-block w-100" src={KitsBannerPattern} alt="pic4" /></Link>
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

                <div className="row">
                    <div className="col-12">
                        <div className="underlinerOutside" >
                            <div className="underlinerInside">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row categoryPics">
                    <div className="col-6">
                        <Link to="/products/eliquids"><img className="d-block w-100" src={EliquidsCat} alt="cat pic 2" /></Link>
                    </div>
                    <div className="col-6">
                        <Link to="/products/kits"><img className="d-block w-100" src={KitsCat} alt="cat pic 3" /></Link>
                    </div>
                    <div className="col-6">
                        <Link to="/products/tanks"><img className="d-block w-100" src={TanksCat} alt="cat pic 1" /></Link>
                    </div>
                    <div className="col-6">
                        <Link to="/products/kits"><img className="d-block w-100" src={ModsCat} alt="cat pic 1" /></Link>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;