import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { VscListOrdered } from "react-icons/vsc";
const GetInTouch = () => {
    return (
        <div className='  '>

            <div className=' bg-white lg:flex md:ml-[4rem] md:my-9  '>

                <div className=' text-black space-y-10 px-5 lg:mt-10'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-4xl font-bold mt-5 uppercase'>Get In Touch</h1>
                        <p className='text-justify my-2 text-lg font-medium'>
                            Have a few questions you want to ask? Do you want to know about the recruitment process? Drop us a note, text, or call.
                        </p>
                    </div>

                    <div className='flex space-x-3'>
                        <MdEmail className='w-[4rem] h-[3rem]' />
                        <div>
                            <h1 className='text-2xl'>Email US</h1>
                            <p>Mail us at hr@growcite.in</p>
                        </div>

                    </div>

                    <div className='flex space-x-3'>
                        <FaPhoneAlt className='w-[4rem] h-[3rem]' />

                        <div>
                            <h1 className='text-2xl'>Call US</h1>
                            <p>Mail us at hr@growcite.in</p>
                        </div>
                    </div>

                    <div className='flex space-x-3'>
                        <FaCloudUploadAlt className='w-[4rem] h-[3rem]' />
                        <div>
                            <h1 className='text-2xl'>Uplod Your Resume</h1>
                            <p>Use the <span className='font-bold'>Contact Form</span> to send us a message or ask about our pool of talented candidates.</p>
                        </div>
                    </div>
                    <div className='flex space-x-3'>
                        <VscListOrdered className='w-[4rem] h-[3rem]' />
                        <div>
                            <h1 className='text-2xl'>See Job Listning</h1>
                            <p>Mail us at hr@growcite.in</p>
                        </div>
                    </div>



                </div>

            </div>
        </div >
    )
}

export default GetInTouch