import React from 'react'
import FeedBackCard from './FeedBackCard'
import styles from '../style'
import { feedback } from '../constans'
const Testimonials = () => {
  return (
    <section id='client' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient absolute z-0' />
      <div className="w-full flex justify-evenly items-center 
        md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2} text-center`}>What people are<br className='sm:block hidden' /> saying about us</h1>
        <div className='w-full md:mb-0 mb-6'>
          <p className={`${styles.paragraph} max-w-[450px] mx-auto`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap flex-grow-0 sm:justify-evenly justify-center w-full feedback-container relative z-[1]'>
        {
          feedback.map((card, index)=>
            <FeedBackCard key={card.id} {...card}/>
          )
        }
      </div>
    </section>
  )
}

export default Testimonials