import React from 'react';
import blogimg1 from '../../../images/blog1.jpg';
import blogimg2 from '../../../images/blog2.jpg';
import blogimg3 from '../../../images/blog3.jpg';
import blogimg4 from '../../../images/blog4.jpg';


const Blog = () => {
    return (
        <div className="my-5">
            <h1 className="text-center">Travel Blog</h1>
            <p className="text-center">Travel Tips And Advice</p>
            <div className="container mt-5">
                <div className="row row-cols-md-2 g-4">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img src={blogimg1} alt="" />
                            </div>
                            <div className="col-md-7 col-12">
                                <h5>Change your place, getting the fresh air</h5>
                                <p>Always stay in the same place same lives feel bothering. So some times everyone should be give their some time only for is/hers.That's important for soul and mind.</p>
                                <span className="text-muted">post by author</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img  src={blogimg2} alt="" />
                            </div>
                            <div className="col-md-7 col-12">
                                <h5>The place, Narikel jinjira</h5>
                                <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
                                <span className="text-muted">post by author</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img  src={blogimg3} alt="" />
                            </div>
                            <div className="col-md-7 col-12">
                                <h5>Pack All you need before travelling</h5>
                                <p>The most important thing is that before your travel starat pack all the stuff you need.Where you travel, you should know the weather situation in those place</p>
                                <span className="text-muted">post by author</span>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-md-5 col-12">
                                <img  src={blogimg4} alt="" />
                            </div>
                            <div className="col-md-7 col-12">
                                <h5>For Natures Lover</h5>
                                <p>People who loves going adventerous trip find this place where waterfall like this gives you peace nand calm.this is most wonderfull place in BD.near bandarban where you will see this amazing views.</p>
                                <span className="text-muted">post by author</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;