import React from 'react'
import logo from '../asset/logo.jpeg'

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='text-center'>


                <div className='flex flex-col '>
                    <div className='mx-auto '>
                        <img src={logo} alt='' className='h-36 w-36 my-5   ' />
                    </div>
                    <ul className=' flex flex-row mx-auto space-x-5  sm:space-x-12  '>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="#Service">SERVICES</a></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="">ABOUT US</a></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="">CAREERS</a></li>
                        <li className='text-gray-200 font-medium hover:underline hover:underline-offset-8 cursor-pointer '><a href="">GET IN TOUCH</a></li>
                    </ul>

                    {/* <hr className='h-[1px] bg-black mb-10 border ' /> */}


                    <div className='flex text-white space-x-4 mx-auto my-6'>
                        <p>Privacy policy</p>
                        <p> Terms and condition</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer