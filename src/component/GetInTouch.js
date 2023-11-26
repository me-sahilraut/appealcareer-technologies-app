import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { VscListOrdered } from "react-icons/vsc";
const GetInTouch = () => {
    return (
        <div className='grid grid-cols-3  '>
            <div className='lg:col-span-1 bg-[#f9f9f9]'>

            </div>
            <div className='col-span-3 lg:col-span-2 bg-[#003459] lg:flex lg:flex-row-reverse   '>

                <div className=' text-white space-y-5 px-5 lg:mt-10'>
                    <h1 className='text-3xl font-bold mt-5'>Get In Touch</h1>
                    <p className='text-justify my-2'>
                        Have a few questions you want to ask? Do you want to know about the recruitment process? Drop us a note, text, or call.
                    </p>
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
                <div className='bg-white mx-5 mt-10 rounded-md lg:ml-[-14rem] shadow-md mb-10'>


                    <h1 className='text-[#003459] font-bold text-2xl text-center py-7  '>
                        Would like to explore the collaboration opportunities?
                    </h1>
                    <form className='space-y-5'>
                        <div className='lg:flex space-y-5 lg:space-y-0'>
                            <div className='mx-5 md:mr-[9rem]  sm:mr-2 lg:mr-0 space-y-2 font-medium'>
                                <label>First Name</label>
                                <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="First Name" />
                            </div>
                            <div className='mx-5 lg:mr-2  sm:mr-[9rem]  space-y-2 font-medium'>
                                <label>Last Name</label>
                                <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className='mx-5 lg:mr-2  sm:mr-[9rem]  space-y-2 font-medium'>
                            <label>Email</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" />
                        </div>
                        <div className='mx-5 lg:mr-2  sm:mr-[9rem] space-y-2 font-medium'>
                            <label>Phone/Mobile</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone/Mobile" />
                        </div>
                        <div className='mx-5 lg:mr-2 sm:mr-[9rem]   space-y-2 font-medium'>
                            <label >Your Message</label>
                            <textarea id="w3review" name="w3review" rows="4" cols="50" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Your Message" />
                        </div>
                        <p className='text-xs mx-5'>By Submitting this form you agree with our privacy policy and terms and conditons. Site is protected by reCAPTCHA</p>
                        <hr className='h-[2px] bg-black mb-10 border ' />
                        <div className='mx-5 lg:mr-2 space-y-2 font-medium py-5'>
                            <input type='submit' value='Submit Form' className='bg-[#00a7e1] text-white p-3 w-full  rounded-md font-medium' />
                        </div>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default GetInTouch