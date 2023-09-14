import React from 'react';
import { TypeAnimation as RawTypeAnimation } from 'react-type-animation';
const HomeBanner = () => {
    return (
        <div className='bg-gradient-to-tr to-purple-100 from-cyan-100 '>

        <div className=''>
  
        <span
          style={{ fontSize: '20px' }}
          className="w-full font-bold block bg-opacity-10 p-3 rounded-lg text-center "
        >
          <span>What is </span>{' '}
          <RawTypeAnimation
            sequence={[
              'm',
              1000,
              'mMarket',
              1000,
              'mMarket.com?',
              1000,
  
            ]}
            repeat={Infinity}
          />
        </span>
  
  
          {/* <h1 className="text-3xl pt-8 my-5 font-bold text-center  ">What is mMarket.com?</h1> */}
          <p className=" text-center mt-5 dark:text-gray-900 ">mMarket.com is one of the world’s largest wholesale marketplaces, with 20 years of experience helping business-to-business <br /> (B2B) companies buy and sell their goods around the world.</p>
  
          <div className="carousel w-full h-96 pt-10 ">
            <div id="slide1" className="carousel-item w-full relative ">
            <img src='https://phone-market-84616.web.app/static/media/daniel-romero-q-RQba-XCgU-unsplash.421c950cbd1e6ab84f9b.jpg' alt='' className="w-full " />
             
              <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src='https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Samsung-Samartphone.jpg' alt='' className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src='https://media.product.which.co.uk/prod/images/original/5afeb9dc1a02-mobile-and-sim-dealsadvicerevised.jpg' alt='' className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              
              <img src='https://s3.ap-southeast-1.amazonaws.com/dlg.dialog.lk/s3fs-public/2023-04/phone-landing-page-phones_1.png' alt='' className="w-full " />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
              </div>
            </div>
          </div>
  
        </div>
      </div> 
    );
};

export default HomeBanner;