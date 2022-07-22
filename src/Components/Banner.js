import React from 'react';
import banner from '../Images/banner1.avif'
import banner1 from '../Images/banner2.jpg'
import banner2 from '../Images/banner3.jpeg'
import banner3 from '../Images/banner4.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} alt='' className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='text-white header'> <h1 className='text-3xl text-center mb-5'>WELCOME TO ONLINE BOI BARI</h1>
                            <p style={{ fontSize: '18px ' }}>We're Soocial, a leading branding agency with a passion for creating memorable names and internationally-renowned brands. Since our launch, we’ve worked on more than 1,000 projects for clients around the world. We’re big enough to handle massive projects, and yet also nimble enough to come up with names on demand that hit every time.</p></div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner1} alt='' className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className=' header'> <h1 className='text-3xl text-center mb-5'>Best collection of books from all genres</h1>
                            <p style={{ fontSize: '18px ' }}>We're Soocial, a leading branding agency with a passion for creating memorable names and internationally-renowned brands. Since our launch, we’ve worked on more than 1,000 projects for clients around the world. We’re big enough to handle massive projects, and yet also nimble enough to come up with names on demand that hit every time.</p></div>

                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner2} alt='' className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner3} alt='' className="w-full h-96" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;