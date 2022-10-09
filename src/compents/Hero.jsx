import React from 'react'
import { robot, discount } from '../assets';
import GetStarted from './GetStarted';
import styles from '../style';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Hero = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  
    return (
      <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div 
              className='flex flex-row items-center py-[6px] px-4 
              bg-discount-gradient rounded-[10px] mb-2'
              data-aos="slide-right"
              data-aos-easing="ease-in-out" 
              data-aos-duration="700"
            >
              <img src={discount} alt="icon-discount"/>
              <p className={`${styles.paragraph} ml-4`}>
                <span className='text-white'>20% </span>
                DISCOUNT FOR 
                <span className='text-white'> 1 MONTH </span>
                ACCOUNT 
              </p>
            </div>

            <div className="flex flex-row justify-between items-center w-full">
              <h1 
                className='flex-1 font-poppins font-semibold text-white ss:leading-[100px] 
                          ss:text-[72px] text-[52px] leading-[75px]'
                data-aos="slide-right"
                data-aos-easing="ease-in-out" 
                data-aos-duration="700"
              >
                The Next <br className='sm:block hidden' />
                <span className='text-gradient'>Generation </span>
              </h1>
              <div className='ss:flex hidden md:mr-4 mr-0'>
                <GetStarted/>
              </div>
            </div>

            <h1 
              className='font-poppins font-semibold text-white ss:leading-[100px] 
              ss:text-[68px] text-[52px] leading-[75px] w-full'
              data-aos="slide-right"
              data-aos-easing="ease-in-out" 
              data-aos-duration="700"
            >
                Payment Method.
            </h1>

            <p 
              className={`${styles.paragraph} max-w-[483px] mt-[40px]`}
              data-aos="slide-right"
              data-aos-easing="ease-in-out" 
              data-aos-duration="700"
              data-aos-offset="70"
            >
              Our team of experts uses a methodology to identify the credit 
              cards most likely to fit your needs. 
              We examine annual percentage rates, annual fees.
            </p>
        </div>

        <div 
          className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
          data-aos="slide-left"
          data-aos-easing="ease-in-out" 
          data-aos-duration="700"
          data-aos-offset="100"
        >
          <img src={robot} alt="builing" className='w-[100%] h-[100%] z-[5] relative'/>
          <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
          <div className='absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient'/>
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        </div>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
      </section>
      )
}

export default Hero