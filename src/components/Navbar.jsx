/* eslint-disable no-unused-vars */
import React from 'react'
import { LOGO } from './utils/constants'

const Navbar = () => {
  return (
    <div className='fixed z-[99] w-full px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center'>
        <div className="logo">
            {LOGO}
        </div>
        <div className="links flex gap-10">
            {["Services", "Our Work", "About Us", "Insights", "Contact us"].map((item, index) => (
                <a href="/" className={`text-md capitalize font-light ${index === 4 && "ml-32"}`} key={index}>{item}</a>
            ))}
        </div>
    </div> 
  )
}

export default Navbar