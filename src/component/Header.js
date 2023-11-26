import React from 'react'

import image from '../asset/images.jpeg'
import About from './About'
import Service from './Service'
import Expertise from './Expertise'
import GetInTouch from './GetInTouch'
import Footer from './Footer'


const Header = () => {

    return (
        <div>
            <div className='bg-black  '>

                <div className='flex flex-col-reverse   lg:grid   lg:grid-cols-2  pb-[10rem] lg:pt-[10rem] '>
                    <div className='md:ml-[7rem] lg:text-left mt-[5rem] lg:mt-0 text-center'>
                        <h1 className='text-5xl text-gray-200 font-bold lg:my-5 '>
                            Your Path to Professional Growth Starts at GrowCite
                        </h1>
                        <p className='text-gray-200 text-lg my-5 '>
                            Discovering the ideal job that aligns with your skills and aspirations.
                        </p>
                        <div className='mt-5 space-x-2  mb-8 md:mr-[7rem]'>
                            <a href='#' className='bg-[#00a7e1] text-white p-2 px-4  rounded-full font-medium  '  >Check Job Listning</a>
                            <a href='#' className='bg-[#00a7e1] text-white p-2 px-4  rounded-full font-medium '  >Contact US</a>

                        </div>
                    </div>
                    <div className='lg:ml-[12rem] mx-auto '>
                        <img src={image} alt='' />
                    </div>
                </div>
            </div >
            <About />
            <Service />
            <Expertise />
            <GetInTouch />
            <Footer />

        </div >
    )
}

export default Header