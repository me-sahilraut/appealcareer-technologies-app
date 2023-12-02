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
import list from "../mockData/list.json";
// import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
// import DropdownMenu from './DropdownMenu';


const Navigation = () => {


    const [isOpen, setIsOpen] = useState(false);
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
                <Link to="/"><img src={logo} alt='' className='h-28 w-28 my-2 md:ml-[6rem] ' /></Link>
                <div className='text-center flex flex-col text-gray-200'>
                    <div className='flex space-x-3 my-6 ml-[22rem]'>
                        <h1 className=''><span className='font-semibold mx-2'>Email :</span> hr@careeract.in
                        </h1>

                    </div>
                    <ul className='relative flex space-x-5 mr-[15rem] '>
                        <li className=' font-medium hover:underline hover:underline-offset-8 cursor-pointer  '> <a className='text-gray-200 hover:text-[#C059C5]'
                            onMouseEnter={() => setIsOpen((prev) => !prev)}
                        >

                            About US

                        </a>

                            {isOpen && (
                                <div className="bg-white absolute top-[3rem] flex flex-col items-start  p-2 w-full" onMouseLeave={() => setIsOpen(false)}>
                                    {list.map((item, i) => (
                                        <div
                                            className="flex w-full justify-between hover:bg-pink-50 cursor-pointer rounded-r-lg border-l-transparent"
                                            key={i}
                                        >
                                            <Link to={item.link}><div className='text-left text-[#003459] my-5'>
                                                <h3 className='font-bold'>{item.title}</h3>
                                                <p className='font-extralight'>{item.description}</p>
                                            </div></Link >
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>

                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                            <Link to="/service" className="hover:text-[#AC75D2]" aria-current="page" > Our Service</Link>
                        </li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>    <Link to="expertise" className="hover:text-[#AC75D2]" aria-current="page" > Our Expertise</Link></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                            <Link to="/jobListing" className='hover:text-[#AC75D2]'>JobListing</Link>  </li>
                        <li className=''>
                            <Link to="/getInTouch" className='bg-[#3A47AF] hover:bg-[#C059C5] text-white p-2 px-6  rounded-full font-medium hover:scale-110 hover:text-white'  >Get In Touch</Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div >
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