import React from 'react'
import { VerticalsData } from '../mockData/verticalsData'
import VerticalsCard from './VerticalsCard'

const OurVerticals = () => {
    return (
        <div className='text-center bg-black pt-[10rem]'>
            <h1 className=' text-3xl md:text-4xl text-white font-bold pb-9 uppercase'>Our Verticals</h1>


            <div className='flex flex-wrap flex-col md:flex-row  gap-4 md:justify-center  items-center mb-10    '>

                {
                    VerticalsData.map((val) => (
                        <VerticalsCard key={val.id} title={val.title} description={val.description} />
                    ))
                }


            </div>
        </div>
    )
}

export default OurVerticals