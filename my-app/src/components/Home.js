import React from 'react';

import HomeCSS from './Home.css';

import image1 from '../other_images/1.jpg';
import image2 from '../other_images/2.jpg';
import image3 from '../other_images/3.jpg';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div id="myCarousel" className="carousel slide col-8 mx-auto" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                        </ol>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={image1} alt="pic1" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={image2} alt="pic2" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={image3} alt="pic3" />
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