import React from 'react'

const ExpertiseInfoData = (props) => {
    return (
        <div className="flip-card w-[24rem] h-[20rem] sm:w-[28rem] sm:h-[18rem]   ">
            <div className="flip-card-inner">
                <div className="flip-card-front bg-white py-10 rounded-md shadow-effect ">
                    <h1 className='text-black font-bold uppercase text-4xl py-[4rem]'>{props.title}</h1>
                </div>
                <div className="flip-card-back text-left py-5 rounded-md text-2xl font-medium pt-5 px-4 shadow-effect ">

                    <p>{props.description}</p>

                </div>
            </div>
        </div>

    )
}

export default ExpertiseInfoData