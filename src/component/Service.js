import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Service = () => {

    useEffect(() => {
        Aos.init({
            delay: 200,
            duration: 1200,
            once: false,
        })
    }, []);
    return (
        <div className=' bg-[#f9f9f9] pt-10 ' id='Service'>


            <div className=''>
                <div className='text-center mt-[6.25rem] ' >
                    <h1 className=' text-3xl md:text-4xl text-[#003459] font-bold uppercase'>Our Service</h1></div>
                <p className='mt-3 text-[#003459] text-justify text-xl lg:mx-[18rem] mx-[3.5rem] '>
                    Finding the perfect match for your team is our expertise. We source, assess, and connect you with top-tier talent that aligns with your company culture and goals.
                </p>


            </div>

            <div className='flex flex-wrap md:p-11  justify-center  '>
                <div className=' gap-2  shadow-xl border border-black-100  md:w-2/5  mt-16 ml-10 mx-5  os-block-2 ' data-aos="fade-right">
                    <h1 className='  text-[#003459] font-bold mt-5 text-xl'>Recruitment Process Outsourcing</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>Recruitment Process Outsourcing (RPO) streamlines hiring, delegating recruitment tasks to specialized external firms. It optimizes talent acquisition, enhances efficiency, and reduces HR overheads by leveraging external expertise.</p>
                </div>

                <div className=' gap-5  shadow-xl border border-black-100  md:w-2/5  mt-16 ml-10 mx-5 os-block-2 ' data-aos="fade-left">
                    <h1 className='  text-[#003459] font-bold mt-5 text-xl'>Executive Search</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>Strategic executive search expertise, Unparalleled talent identification, Precise match-making for top-tier roles, Elevating organizations with optimal leadership.</p>
                </div>

                <div className='  gap-5  shadow-xl border border-black-100  md:w-2/5 mt-16 ml-10 mx-5 os-block-2 ' data-aos="fade-left">
                    <h1 className='  text-[#003459] font-bold mt-5 text-xl'>Permanent Hiring</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>Permanent hiring expertise, Identifying lasting talent fits, Securing key roles for longevity, Building sustainable workforce foundations.</p>
                </div>

                <div className='  gap-5  shadow-xl border border-black-100  md:w-2/5 mt-16 ml-10 mx-5 os-block-2 ' data-aos="fade-left">
                    <h1 className='  text-[#003459] font-bold mt-5 text-xl'>Technology Services</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>We offer training and certification, Upon success, placement in top firms, Empowering careers with skill enhancement, Linking expertise to premier opportunities

                    </p>
                </div>

                <div className='  gap-5  shadow-xl  border border-black-100  md:w-2/5  mt-16 ml-10 mx-5 os-block-2' data-aos="fade-right">
                    <h1 className='  text-[#003459] font-bold mt-5 text-xl'>Training and Placement</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>Placement training is focused on giving people the skills, knowledge, and perspectives they need to be successful in the job. Skill development: Programs for placement training provide participants with the chance to improve a variety of employability skills.
                    </p>
                </div>
                <div className='  gap-5  shadow-xl border border-black-100  md:w-2/5 mt-16 ml-10 mx-5 os-block-2 ' data-aos="fade-left">
                    <h1 className='  text-[#003459] font-bold mt-5 text-xl'>Interview and Talent Assignment At Work</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>We offer coding and video interviews, Live interview panels for tech and non-tech, Comprehensive assessment tools provided, Preparing candidates for varied interviews
                    </p>
                </div>

            </div>
            <div className='flex justify-center mt-6 pb-20'>
                <button className='bg-[#3A47AF] hover:bg-[#C059C5] text-white py-2 px-6 rounded-full mt-3  font-medium  '>
                    Explore Our Listing
                </button>
            </div>

        </div>



    )
}

export default Service