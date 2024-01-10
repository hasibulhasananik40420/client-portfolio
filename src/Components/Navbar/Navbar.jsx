/* eslint-disable no-unused-vars */
import React from 'react'
import chad from '../../assets/chad.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white h-[92px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4 2xl:px-0 py-4 '>
        <Link to={'/'} className='flex items-center gap-4 w-[260px] h-[60px]'>
        <div >
            <img className='w-[60px] h-[60px] rounded-full' src={chad} alt="" />
        </div>
         <div>
            <h1 className='text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px]'>Chad</h1>
             <p className='text-[#2B2B2B] text-[16px] italic font-Montserrat font-medium leading-[20px]'>Senior UX Researcher</p>
         </div>
        </Link>
    </div>
  )
}

export default Navbar