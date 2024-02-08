/* eslint-disable no-unused-vars */
import React from 'react'
import chad from '../../assets/chad.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white h-[92px] max-w-container 2xl:max-w-[1200px] mx-auto lg:px-[230px] xl:px-[230px] 2xl:px-[230px]  px-4 md:px-8 py-4 '>
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