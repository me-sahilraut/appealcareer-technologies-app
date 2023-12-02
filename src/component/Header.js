import React from 'react'

import image from '../asset/images.jpeg'
import About from './About'
import Service from './Service'
import Expertise from './Expertise'
import GetInTouch from './GetInTouch'
import Footer from './Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OurVerticals from './OurVerticals'


const Header = () => {

    useEffect(() => {
        Aos.init({
            delay: 200,
            duration: 1200,
            once: false,
        })
    }, []);

    return (
        <div>
            <div className='bg-black  '>

                <div className='flex flex-col-reverse   lg:grid   lg:grid-cols-2  pb-[10rem] lg:pt-[10rem] '>
                    <div className='md:ml-[7rem] lg:text-left mt-[5rem] lg:mt-0 text-center lg:space-y-7' data-aos="fade-right">
                        <h1 className='text-5xl text-gray-200 font-bold lg:my-5 '>
                            Your Ultimate Solution Partner!

                        </h1>
                        <p className='text-gray-200 text-lg my-5 '>
                            At Appeal Career Technologies, we take pride in being the definitive destination for all your workforce-related needs. With an unwavering commitment to excellence, innovation, and client satisfaction, we offer a diverse range of services tailored to optimize your organization's human capital and operational efficiency

                        </p>
                        <div className='mt-5 space-x-2  mb-8 md:mr-[7rem]'>
                            <Link className='bg-[#3A47AF] hover:bg-[#C059C5] text-white p-2 px-4  rounded-full font-medium  ' to="/jobListing" >Check Job Listning</Link>
                            <a href='#' className='bg-[#3A47AF] hover:bg-[#C059C5] text-white p-2 px-4  rounded-full font-medium '  >Contact US</a>

                        </div>
                    </div>
                    <div className='lg:ml-[12rem] mx-auto ' data-aos="fade-left">
                        <img src={image} alt='' />
                    </div>
                </div>
            </div >
            <About />
            <OurVerticals />
            <Service />
            <Expertise />
            <GetInTouch />


        </div >
    )
}

export default Header