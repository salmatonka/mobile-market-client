import React from 'react';
import { useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import TypeAnimation from '../TypeAnimation';
import { TypeAnimation as RawTypeAnimation } from 'react-type-animation';
const About = () => {
    return (
        <div className=' min-h-screen '>
        <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gradient-to-tr to-purple-100 from-cyan-100 text-gray-800">

            <h3 className='text-center text-3xl font-bold pt-0 pb-14 '>ABOUT GLOBAL BRAND ESHOP</h3>

            <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202112/befunky-collage-sixteen_nine.jpg?size=948:533" alt="" className="w-full rounded-md h-60 sm:h-96 bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gradient-to-tr to-purple-200 from-cyan-200 ">
                    <div className="space-y-2 ">
                        <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Welcome to mMarket.com</a>
                        <p className="text-xs text-gray-600">
                            We are committed to becoming the most loved and trusted store for all electronic devices with a focus on mobile components by providing a cutting-edge E-commerce platform, agile warehouse systems and state of the art customer care center with wider range of products selection, great shopping experience, rapid delivery, and provide the best warranty support.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default About;