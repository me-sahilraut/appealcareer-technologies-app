import React from 'react'
// import icon from '../asset/icon.png'

const VerticalsCard = (props) => {
    return (
        <div className="flip-card w-[70%] md:w-[40%]  h-[28rem] lg:h-[22rem] md:h-[30rem] xl:w-[21%]  xl:h-[30rem] my-10 py-4  ">
            <div className="flip-card-inner">
                <div className="flip-card-front bg-white   rounded-md py-[7rem] md:py-[3rem] lg:py-[7rem] px-5 text-center ">
                    {/* <img src={icon} alt='' /> */}
                    <h1 className='text-black font-bold text-3xl uppercase'>{props.title}</h1>
                </div>
                <div className="flip-card-back text-lg font-medium text-left px-5 rounded-md  py-5 overflow-hidden ">

                    <p>{props.description}</p>

                </div>
            </div>
        </div>
    )
}

export default VerticalsCard