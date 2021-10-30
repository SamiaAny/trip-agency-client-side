import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import img1 from '../../../images/banner-clider/banner1.jpg';
import img2 from '../../../images/banner-clider/banner2.jpg';
import img3 from '../../../images/banner-clider/banner3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: '#333333' }}>
                        <h1>Welcome to Trip Agency</h1>
                        <p>Enjoy your journey with Trip Agency</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Are you ready for your next trip?</h1>
                        <p>Always try to provide best facilities</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-img"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Take your dream vacation</h1>
                        <p>Enjoy your holiday and explore new places with us</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;