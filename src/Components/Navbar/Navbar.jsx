/* eslint-disable no-unused-vars */
import React from 'react'
import chad from '../../assets/1712944679622.jpeg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-white my-10 max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:px-[230px]  px-4 md:px-8  '>
        <Link to={'/'} className='flex items-center gap-4 w-[260px] h-[60px]'>
        <div >
            <img className='w-[50px] h-[50px] rounded-full' src={chad} alt="" />
        </div>
         <div>
            <h1 className='text-[#2B2B2B] text-[16px] font-Montserrat font-semibold leading-[30px]'>Chad</h1>
             <p className='text-[#2B2B2B] text-[12px] italic font-Montserrat font-medium leading-[16px]'>Senior UX Researcher</p>
         </div>
        </Link>
    </div>
  )
}

export default Navbar