import React from 'react';
import AllTourPackages from '../../AllTourPackages/AllTourPackages';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import PhotoGallery from '../PhotoGallery/PhotoGallery';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AllTourPackages></AllTourPackages>
            <About></About>
            <PhotoGallery></PhotoGallery>
            <Blog></Blog>
        </div>
    );
};

export default Home;