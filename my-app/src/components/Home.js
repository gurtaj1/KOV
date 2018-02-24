import React from 'react';
import image1 from '../other_images/1.jpg';
import image2 from '../other_images/2.jpg';
import image3 from '../other_images/3.jpg';

class Home extends React.Component {
    render() {
        return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                        <img className="d-block img-fluid" src={image1} alt="pic1" />
                    </div>
                    <div className="item">
                        <img className="d-block img-fluid" src={image2} alt="pic2" />
                    </div>
                    <div className="item">
                        <img className="d-block img-fluid" src={image3} alt="pic3" />
                    </div>
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
        )}
}

export default Home;