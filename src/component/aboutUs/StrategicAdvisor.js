import React from 'react'
// import { FcBusinessman } from "react-icons/fc";
import image from "../../asset/Advisor.jpeg"
export const StrategicAdvisor = (props) => {
    return (
        <div className='relative LeaderShipCard   lg:w-[12%] w-[32%] lg:h-[11rem]  shadow-block mb-10 rounded-lg'>
            <div className='space-y-4  pb-9 '>

                <img src={image} alt='AdvisorImg' className='lg:h-[11rem]  w-full ' />

                <div className=' absolute bottom-[1rem] mx-5 space-y-1 '>

                    <h1 className='text-sm font-serif font-bold uppercase text-white'>{props.name}</h1>
                    <h2 className='text-xs font-semibold text-white'>{props.position}</h2>


                </div>
            </div>
        </div>
    )
}
