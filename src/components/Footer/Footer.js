import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-md-4">
                    <h1 className="brand-logo">Trip Agency</h1>
                    <p className="brand-desc">Always try to provide best facilities.Enjoy your trip journey with us.Explore more beautiful place by grabing our special packages.</p>
                </div>
                <div className="col-md-4">
                    <div className="footer-menu">
                        <ul className="text-center">
                            <li className="menu-item">Home</li>
                            <li className="menu-item">Blog</li>
                            <li className="menu-item">About</li>
                            <li className="menu-item">Tour Packages</li>
                            <li className="menu-item">Travel Gallery</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <h5 className="text-center">Contact us</h5>
                    <div className="icon-footer">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-instagram"></i>
                        <i className="bi bi-whatsapp"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                    <br />
                    <div className="text-center">
                        <p><i className="bi bi-house-door me-2"></i>2626,Bashundhara,Dhaka,Bangladesh</p>
                        <p><i className="bi bi-envelope-open me-2"></i>tripagency@gmail.com</p>
                    </div>
                </div>
            </div>
            <p className="text-left">&copy;copyright reserved by Trip Agency </p>
        </div>
    );
};

export default Footer;