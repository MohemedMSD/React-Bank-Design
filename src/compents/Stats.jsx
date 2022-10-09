import React, {useState, useEffect} from 'react';
import  {stats} from '../constans';
import styles from '../style';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const Stats = () => {
  const [CountOn, setCountOn] = useState(false)
  useEffect(() => {
    setCountOn(false)
  }, [])
  
  return (
    <ScrollTrigger onEnter={()=> setCountOn(true)}>
      <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {
          stats.map((item, index)=>
            <div key={item.id} className='flex flex-1 justify-center items-center flex-row m-3'>
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] 
              xs:leading-[53px] leading -[43px] text-white'>
                {
                  CountOn && <CountUp start={0} end={item.value} duration={1.2}/>
                }
                <span>{index === stats.length-1 ? 'M+' : '+'}</span>
              </h4>
              <p className='font-poppins font-semibold xs:text-[20px] text-[14px] 
              xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
                {item.title}
              </p>
            </div>
          )
        }
      </section>
    </ScrollTrigger>
  )
}

export default Stats