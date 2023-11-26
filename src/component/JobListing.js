import React from 'react'
import { Link } from 'react-router-dom'
import { currentOpeningData } from '../mockData/currentOpeningData'
import CurrentOpening from './CurrentOpening'





const JobListing = () => {
    return (
        <div className='bg-[#f9f9f9]'>
            {/*Job Listing Header Start*/}
            <div className='bg-black text-center space-y-3 py-[7rem]'>

                <h1 className='text-white font-medium  text-xl '><span>Career </span></h1>

                <h1 className='text-white text-4xl font-bold'>Explore Our Job Opening</h1>
                <p className=' text-white -tracking-tighter'>Check out Our Job Opening , it's Just a few our Listing</p>
            </div>

            {/*Job Listing Header End*/}



            {/*Job Listing Body Start*/}

            <div className=''>
                <h1 className='text-3xl font-bold text-center mt-[5rem] text-[#003459]'>
                    Current Openings
                </h1>

                <div>
                    {
                        currentOpeningData.map((val) => (
                            <CurrentOpening key={val.id} post={val.post} location={val.location} experience={val.experience} />
                        ))
                    }
                </div>

            </div>

            {/*Job Listing Body End*/}

            <div className='bg-white mt-10 rounded-lg  shadow-md mb-10 w-[40rem] mx-auto '>


                <h1 className='text-[#003459] font-bold text-2xl text-center py-2  '>
                    Didn't find suitable role?
                </h1>
                <p className='text-[#003459] font-medium text-2xl text-center pb-7  '>
                    Just send us your cv and we will get back to you
                </p>
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

                    <div className='lg:flex space-y-5 lg:space-y-0'>
                        <div className='mx-5 md:mr-[9rem]  sm:mr-2 lg:mr-0 space-y-2 font-medium'>
                            <label>Email</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" />
                        </div>
                        <div className='mx-5 lg:mr-2  sm:mr-[9rem]  space-y-2 font-medium '>
                            <label>Phone/Mobile</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Phone/Mobile" />
                        </div>

                    </div>

                    <div className='lg:flex space-y-5 lg:space-y-0'>
                        <div className='mx-5 md:mr-[9rem]  sm:mr-2 lg:mr-0 space-y-2 font-medium'>
                            <label>Experience</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Experience" />
                        </div>
                        <div className='mx-5 lg:mr-2  sm:mr-[9rem]  space-y-2 font-medium'>
                            <label>Skill Set</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Skill Set" />
                        </div>

                    </div>

                    <div className='lg:flex space-y-5 lg:space-y-0'>
                        <div className='mx-5 md:mr-[9rem]  sm:mr-2 lg:mr-0 space-y-2 font-medium'>
                            <label>Current CTC (Annual)</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. 1,00,000" />
                        </div>
                        <div className='mx-5 lg:mr-2  sm:mr-[9rem]  space-y-2 font-medium'>
                            <label>Expected CTC (Annual)</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Ex. 1,00,000" />
                        </div>

                    </div>

                    <div className='lg:flex space-y-5 lg:space-y-0'>
                        <div className='mx-5 md:mr-[9rem]  sm:mr-2 lg:mr-0 space-y-2 font-medium'>
                            <label>Notice period</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Enter your Notice period" />
                        </div>
                        <div className='mx-5 lg:mr-2  sm:mr-[9rem]  space-y-2 font-medium'>
                            <label>Current Location</label>
                            <input type="text" class="block w-full rounded-sm border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Current Location" />
                        </div>

                    </div>




                    <p className='text-xs mx-5'>By Submitting this form you agree with our privacy policy and terms and conditons. Site is protected by reCAPTCHA</p>
                    <hr className='h-[2px] bg-black mb-10 border ' />
                    <div className='mx-5 lg:mr-2 space-y-2 font-medium py-5'>
                        <input type='submit' value='Submit Form' className='bg-[#00a7e1] text-white p-3 w-full  rounded-md font-medium' />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default JobListing