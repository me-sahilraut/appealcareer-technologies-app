import React from 'react'
import LeadershipCard from './LeadershipCard'
import { CardData } from '../../mockData/leadershipTeamCardData'
import { AdvisorCardData } from '../../mockData/strategicAdvisorCardData'
import { StrategicAdvisor } from './StrategicAdvisor'

const LeadershipTeam = () => {
    return (
        <div className='bg-[#f9f9f9]'>

            {/* Section 1 start */}
            <div className='bg-black  w-full text-white text-center space-y-5 pt-[7rem] pb-[10rem] mb-20 '>

                <h1 className='text-3xl font-medium uppercase'>
                    In the symphony of existence
                </h1>
                <div className='text-2xl mx-auto md:w-[50rem] ' >
                    A guiding light,
                    Whence dreams arise, painting our future bright.
                    Deep within, where aspirations take flight,
                    The heart's echo, the source of our vision's might.
                </div>
            </div>
            {/* Section 1 End */}


            {/* Section 2 start */}
            <div className=''>
                <h1 className='text-5xl font-serif text-[#003459] text-center font-light my-[3rem] uppercase'>Leadership Team</h1>
            </div>

            <div className='flex flex-col lg:flex-row flex-wrap gap-x-10 lg:justify-center lg:mx-10  items-center my-5 mb-[9rem]'>
                {
                    CardData.map((val) => (
                        <LeadershipCard key={val.id} img={val.image1} name={val.name} position={val.position} skill1={val.skill1} skill2={val.skill2} />
                    ))
                }
            </div>

            {/* Section 2 End */}


            {/* Section 3 start */}
            <div>
                <h1 className='text-5xl font-serif text-[#003459] text-center font-light my-[3rem] uppercase'>Strategic Advisor</h1>
            </div>

            <div className='flex flex-col lg:flex-row flex-wrap gap-x-10 lg:justify-center lg:mx-10  items-center my-5'>
                {
                    AdvisorCardData.map((val) => (
                        <StrategicAdvisor key={val.id} img={val.image1} name={val.name} position={val.position} skill1={val.skill1} skill2={val.skill2} />
                    ))
                }
            </div>

            {/* Section 3 End */}

        </div>

    )
}

export default LeadershipTeam