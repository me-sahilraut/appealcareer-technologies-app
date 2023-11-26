import React from 'react'
import expertiseData from '../mockData/expertiseData'
import ExpertiseInfoData from './ExpertiseInfoData'

const Expertise = () => {
    return (
        <div className=''>
            < div className='text-center mt-[6.25rem] ' >
                <h1 className=' text-3xl md:text-4xl text-[#003459] font-bold '>Area of Expertise</h1></div>
            <p className='mt-3 text-[#003459] text-justify  mx-[3rem] lg:mx-[18rem] mb-5 '>
                GrowCite excels in strategic recruitment, inclusive hiring, and leveraging technology to match top-tier talent with diverse industry needs.
            </p>
            <div className='flex flex-wrap flex-col md:flex-row  gap-4 md:justify-center  items-center mb-10 mx-auto md:mx-[16rem]  '>

                {
                    expertiseData.map((val) => (
                        <ExpertiseInfoData key={val.id} title={val.title} description={val.description} />
                    ))
                }


            </div>
        </div>
    )
}

export default Expertise