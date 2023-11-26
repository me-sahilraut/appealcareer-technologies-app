import React from 'react'
import image from '../asset/images.jpeg'
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
        <div className='flex flex-col-reverse lg:flex-row lg:justify-between mt-16 mx-[5rem] space-x-5 ' id='about'>
            <div className='' data-aos="fade-right">
                <h1 className='text-3xl md:text-4xl text-[#003459] font-bold '>About Us</h1>
                <p className='mt-3 text-[#003459] text-justify text-xl '>
                    At GrowCite, our founder's 14 years of recruitment experience in reputable MNCs in India drives us. Committed to unmatched recruitment solutions for immediate needs and lasting growth. Guided by integrity and innovation, we're not mere recruiters; we're trusted advisors. Our meticulous approach ensures candidate-client cultural alignment. We champion diversity, fostering dynamic teams, with tech-driven talent advisors navigating the evolving landscape. Excel in diversity and inclusion hiring, including female talent, RTW, PWD, and LGBTQ communities, setting us apart with a commitment to excellence.
                </p>
                <button className='bg-[#00a7e1] text-white py-2 px-6 rounded-full mt-3  '>
                    Get In Touch
                </button>
            </div>
            <div className="lg:w-[227rem] " data-aos="fade-left">
                <img src={image} alt="about-img" className='lg:w-full lg:h-full' />
            </div>

        </div>
    )
}

export default About