import React from 'react'
import style from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div 
      className={`${style.flexCenter} p-[2px] w-[140px] h-[140px] bg-blue-gradient rounded-full`}
      data-aos="zoom-in"
      data-aos-easing="ease-in-out"
      data-aos-duration="400"
    >
      <div className={`${style.flexCenter} cursor-pointer flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${style.flexStart} flex-row`}>
          <p className='text-gradient font-poppins font-medium text-[18px] leading-[23px] mr-2'>Get</p>
          <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain ' />
        </div>
        <p className='text-gradient font-poppins font-medium text-[18px] leading-[23px]'>Started</p>
      </div>
    </div>
  )
}

export default GetStarted