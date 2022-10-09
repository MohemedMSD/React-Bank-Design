import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constans'
import styles from '../style'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-col justify-center sm:justify-start mr-0 md:mr-[139px] '>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-7 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex flex-row w-full justify-between flex-wrap md:mt-0 mt-10 flex-[1.5]'>
          {footerLinks.map((footerLink)=>
              <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins text-[18px] font-semibold leading-[27px] text-white'>{footerLink.title}</h4>
                <ul className='mt-6'>
                  {footerLink.links.map((link, index)=>
                      <li key={index} className={`font-poppins text-[16px] cursor-pointer hover:text-secondary font-normal leading-[24px] text-dimWhite  ${index !== footerLink.links.length ?'mt-3' : 'mt-0'}`}><a href={link.link} >{link.name}</a></li>
                    )}
                </ul>
              </div>
            )}
        </div>
      </div>

      <div className='flex justify-between pt-6 w-full items-center flex-col md:flex-row border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins text-[18px] font-normal leading-[27px] text-dimWhite'>
          2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex mt-6 md:mt-0'>
        {socialMedia.map((media, index)=>
          <a href={media.link} key={media.id}>
            <img 
              src={media.icon} 
              alt={media.id} 
              className={`w-[21px] h-[21px] object-contain ${index !== socialMedia.length-1 ? 'mr-6' : 'mr-0'}`}
            />
          </a>
        )}
        </div>
      </div>
    </section>
  )
}

export default Footer