import React from 'react'
import image from '../../asset/Leader.jpeg'
// import { FcBusinesswoman } from "react-icons/fc";
// import { FcBusinessman } from "react-icons/fc";
const LeadershipCard = (props) => {
    return (
        <div className=' relative LeaderShipCard  lg:w-[18%] w-[32%] lg:h-[19rem] shadow-block    drop-shadow-lg  '>
            <div className=' space-y-4 pb-9 '>

                <img src={image} alt='LeaderImage' className='lg:h-[19 rem]  w-full ' />

                <div className='absolute bottom-0 px-5 space-y-1   w-full '>

                    <h1 className='text-lg  font-bold uppercase text-white'>{props.name}</h1>
                    <h2 className='text-lg font-semibold text-white '>{props.position}</h2>


                </div>
            </div>
        </div>

    )
}

export default LeadershipCard