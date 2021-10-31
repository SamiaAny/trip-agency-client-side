import React from 'react';
import galleryImg1 from '../../../images/photogallery/galleryimg1.jpg';
import galleryImg2 from '../../../images/photogallery/galleryimg2.jpg';
import galleryImg3 from '../../../images/photogallery/galleryimg3.jpg';
import galleryImg5 from '../../../images/photogallery/galleryimg5.jpg';
import galleryImg4 from '../../../images/photogallery/galleryimg4.jpg';
import imggallery from '../../../images/photogallery/galleryimg6.jpg';
import './PhotoGallery.css';

const PhotoGallery = () => {
    return (
        <div>
            <h1 className="text-center">Travel Gallery</h1>
            <p className="text-center mb-5">where our client share some memorable moment</p>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-2">
                    <div className="col">
                        <img src={imggallery} className="img-thumbnail" alt="" />
                    </div>
                    <div className="col">
                        <img src={galleryImg5} className="img-thumbnail" alt="" />
                    </div>
                    <div className="col">
                        <img src={galleryImg4} className="img-thumbnail" alt="" />
                    </div>
                </div>
                <div className="my-5">
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <img src={galleryImg1} className="img-thumbnail" alt="" />
                        </div>
                        <div className="col">
                            <img src={galleryImg2} className="img-thumbnail" alt="" />
                        </div>
                        <div className="col">
                            <img src={galleryImg3} className="img-thumbnail" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;