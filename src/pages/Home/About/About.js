import React from 'react';
import { Image } from 'react-bootstrap';
import aboutImg from '../../../images/about_travel.jpg';

const About = () => {
    return (
        <div className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 mt-4">
                        <h2>Why Choose <br /> Our Travel Agency</h2>
                        <p className="mt-5">Provide best facilities for every client.All time we give first priority what our client's demand.Travelers who book flights through trip travel are also eligible for further discounts on hotel bookings. If you’re not sure where you want to go, see our packages. Everywhere button on the hoOur guided helps more to explore adventures trip.Best hotel facilities, first booking etc all are available in our travel trip company.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="d-flex jusify-content-center align-itms-center">
                            <Image className="resize-img" src={aboutImg} roundedCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;