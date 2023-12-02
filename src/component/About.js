import React from 'react'
import image from '../asset/header.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        Aos.init({
            delay: 200,
            duration: 1200,
            once: false,
        })
    }, []);
    return (
        <div className='flex flex-col-reverse lg:grid lg:grid-cols-2 lg:justify-between mt-16 mx-[5rem] space-x-5 mb-[15rem]' id='about-section'>
            <div className='' data-aos="fade-right">
                <h1 className='text-3xl md:text-4xl text-[#003459] font-bold uppercase'>About Us</h1>
                <p className='mt-3 text-[#003459] text-justify text-xl '>
                    At Appeal Career Technologies, we take pride in being the definitive destination for all your workforce-related needs. With an unwavering commitment to excellence, innovation, and client satisfaction, we offer a diverse range of services tailored to optimize your organization's human capital and operational efficiency.


                    At Appeal Career Technologies, our success is synonymous with your success. We strive to be more than just a service provider. we aim to be your trusted partner in achieving your organizational goals. Our dedication to delivering unparalleled solutions and fostering long-term relationships forms the cornerstone of our company ethos. Partner with us to unlock the full potential of your workforce, streamline HR processes, and elevate your organization to new heights of success. Join us on this transformative journey as we redefine the paradigms of talent acquisition, technology-driven HR solutions, and professional development.
                    Discover the difference with Appeal Career Technologies - where innovation meets expertise, and excellence is our standard.

                </p>
                <button className='bg-[#3A47AF] hover:bg-[#C059C5] text-white py-2 px-6 rounded-full mt-3  '>
                    Get In Touch
                </button>
            </div>
            <div className="mx-auto " data-aos="fade-left">
                <img src={image} alt="about-img" className='lg:w-full lg:h-full mx-auto' />
            </div>

        </div>
    )
}

export default About