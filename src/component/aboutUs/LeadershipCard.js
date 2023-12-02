import React from 'react'
// import image from '../../asset/female-user.jpeg'
import { FcBusinesswoman } from "react-icons/fc";
// import { FcBusinessman } from "react-icons/fc";
const LeadershipCard = (props) => {
    return (
        <div className='LeaderShipCard  lg:w-[27%] w-[32%] shadow-block  '>
            <div className='bg-gray-500 space-y-4 pb-9'>

                <FcBusinesswoman className='lg:h-[17rem]  w-full ' />

                <div className='mx-5 space-y-1  text-center '>

                    <h1 className='text-xl font-serif font-bold uppercase text-white'>{props.name}</h1>
                    <h2 className='text-lg font-semibold text-white '>{props.position}</h2>


                </div>
            </div>
        </div>

    )
}

export default LeadershipCard