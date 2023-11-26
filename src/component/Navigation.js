import React from 'react'
import logo from '../asset/logo.jpeg'
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { toggleMenu } from '../store/HamburgerMenu';
import SidebarMenu from './SidebarMenu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);

    useEffect(() => {
        Aos.init({
            delay: 200,
            duration: 1200,
            once: false,
        })
    }, []);

    var headerStyle;


    if (offset > 200) {

        headerStyle = " fixed top-0 z-10 w-full  fade-down ";

    }
    else {

    }


    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1024;

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);


    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    return width > breakpoint ? (
        <div className={headerStyle}  >
            <div className='flex justify-between shadow-2xl bg-black z-10 ' data-aos="fade-down">
                <img src={logo} alt='' className='h-28 w-28 my-2 md:ml-[6rem] ' />
                <div className='text-center flex flex-col text-gray-200'>
                    <div className='flex space-x-3 my-6 ml-[10rem]'>
                        <h1 className=''><span className='font-semibold mx-2'>Email :</span>adi@carrieract.in</h1>
                        <h1><span className='font-semibold mx-2'>Phone :</span>9922713588</h1>
                    </div>
                    <ul className='flex space-x-5 mr-[15rem] '>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '>About us</li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>Our Service</li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>Our Expertise</li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                            <Link to="/jobListing">JobListing</Link>  </li>
                        <li className=''>
                            <a href='#' className='bg-[#00a7e1] text-white p-2 px-6  rounded-full font-medium hover:scale-110'  >Get In Touch</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    ) :

        <div className='flex justify-between shadow-2xl '>
            <img src={logo} alt='' className='h-28 w-28 my-2 md:ml-[6rem] ' />
            <div className='text-right lg:text-center md:flex md:flex-col text-gray-200 mr-3'>
                <div className='md:flex md:space-x-3 md:my-2 md:ml-[10rem] invisible md:visible '>
                    <h1 className=''><span className='font-semibold mx-2'>Email :</span>adi@carrieract.in</h1>
                    <h1><span className='font-semibold mx-2'>Phone :</span>9922713588</h1>
                </div>
                <div className='mr-5'>
                    <GiHamburgerMenu onClick={() => toggleMenuHandler()} className='inline w-[2rem] h-[3rem] ' />
                    <SidebarMenu className="" />
                </div>
            </div>
        </div>

}

export default Navigation