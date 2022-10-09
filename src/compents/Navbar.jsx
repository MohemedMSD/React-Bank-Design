import React from 'react'
import Style from '../style'
import { useState } from 'react'
import {close, logo, menu } from '../assets'
import {navLinks} from '../constans'
const Navbar = () => {
    const [toggle, settoggle] = useState(false);
    return (
        <nav className='w-full py-6 flex justify-between items-center navbar'>
            <img src={logo} alt="logo" className='w-[124px] h-[32px]'/>

            {/* nav for desktop */}
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {
                    navLinks.map((link, index)=>
                        <li 
                            key={link.id}
                            className={`font-poppins font-normal cursor-pointer text-white
                            text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}
                        >
                            <a href={`#${link.id}`}>
                                {link.title}
                            </a>
                        </li>
                    )
                }
            </ul>
            
            {/* nav for mobille */}
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu} 
                    alt="nav-btn"
                    className='object-contain w-[28px] h-[28px] cursor-pointer'
                    onClick={()=> settoggle(!toggle)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
                absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[1]`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {
                            navLinks.map((link, index)=>
                                <li 
                                    key={link.id}
                                    className={`font-poppins font-normal cursor-pointer text-white
                                    text-[16px] ${index === navLinks.length -1 ? 'mb-0' : 'mb-10'}`}
                                >
                                    <a href={`#${link.id}`}>
                                        {link.title}
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar