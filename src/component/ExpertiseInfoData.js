import React from 'react'

const ExpertiseInfoData = (props) => {
    return (
        <div className="flip-card  w-[200px] h-[120px]  ">
            <div className="flip-card-inner">
                <div className="flip-card-front bg-gray-200 ">
                    <h1 className='text-[#003459] font-bold'>{props.title}</h1>
                </div>
                <div className="flip-card-back">

                    <p>{props.description}</p>

                </div>
            </div>
        </div>

    )
}

export default ExpertiseInfoData