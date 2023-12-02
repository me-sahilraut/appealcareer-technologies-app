import React from 'react'
import { Link } from 'react-router-dom'
const CurrentOpening = (props) => {
    return (
        <div>
            <div className='   border border-black-100    mt-16  mx-5 job-container space-y-6 md:space-y-0 space-x-5 flex flex-col md:grid md:grid-cols-4 lg:mx-[7rem]   ' >

                <div>
                    <h1 className='text-[#003459] font-bold text-xl'>{props.post} </h1>
                </div>
                <div>
                    <span className='text-[#003459] font-bold'>Location:</span>
                    <p >{props.location}</p>

                </div>
                <div>
                    <span className='text-[#003459] font-bold'>Experience:</span>
                    <p>{props.experience}</p>

                </div>
                <div className='pb-10 md:pb-2  '>
                    <button className='hover:bg-[#3A47AF] hover:text-white p-3 w-full  rounded-full font-medium text-[#00a7e1] border-solid border-2 boder-[#00a7e1] lg:px-[2rem] lg:py-2 '>
                        <Link href=''>Explore JD</Link>
                    </button>

                </div>


            </div>
        </div>
    )
}

export default CurrentOpening