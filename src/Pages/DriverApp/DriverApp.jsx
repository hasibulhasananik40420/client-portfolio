/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet-async';
import FaqSlider from '../../Components/FaqSlider/FaqSlider';


const DriverApp = () => {
  return (
    <div>
       <Helmet>
        <title>Chad Smith | Driver Application</title>
       
      </Helmet>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:[230px]  px-4 md:px-8 ">
       
       <div className=' lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>
       <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] text-[24px] font-Montserrat font-bold tracking-[-0.5px]">Product Redesign: Driver Application</h1>
     
       <p className='text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-semibold mt-2 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>Redesigning an internal application
       </p>
    
       

       <h3 className='text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]'>Background</h3>

        <p className='mt-[20px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-medium md:leading-6 leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full'>Leadership wanted to redesign an internal application used by branch drivers
        </p> 
        
       

         <p className='mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full'>My role was conducting observational research and prioritizing findings with Product. My findings were then reused by UX Design to build additional documents (e.g. A Day In The Life Narratives, Journey Maps & Personas) to inform the first redesign. </p>

       </div>



          <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Work Samples</h1>


            {/*********** slider here ****************/}
            <div className='mt-[20px]'>
                 <FaqSlider/>
             </div>
           </div>



         <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px]  font-bold font-Montserrat leading-[28px]'>Research Findings</h1>


           <div className='flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[930px] w-full'>

           <div className='flex gap-4 mt-[20px]'>
              <span className='w-[27px] h-[20px] flex justify-center items-center '>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Drivers were missing key features when completing daily tasks, which opened the door for human error and reliance on third-party tools</p>

            </div>

            

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[20px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px]  font-normal font-Montserrat md:leading-6 leading-6 '>Drivers were impacted by inaccurate or incomplete customer data entered by employees</p>

            </div> 
            
            <div className='flex gap-4 mt-[10px]'>
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6'>Customers not following equipment return policies contributed to wasted employee hours
            </p>

            </div>

           </div>
         </div>

            <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Impact</h1>


           <div className='flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>

           <div className='flex gap-4 mt-5'>
              <span className='w-[27px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Product aligned on what issues were addressable through solely user experience changes verses requiring additional operational changes
               </p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat leading-6 '>Product built a backlog of issues to address based on feasibility & urgency
               </p>

            </div> 
            
            <div className='flex gap-4 mt-[10px]'>
            <span className='w-[27px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat leading-6 '>One major feature, an in-app photo capturing experience, was immediately redesigned and prioritized for implementation


</p>

            </div>

           </div>
         </div>



        <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Personal Learnings</h1>


           <div className='flex flex-col lg:w-[790px] xl:w-[790px] 2xl:w-[930px] w-full'>

           <div className='flex gap-4 mt-5'>
           <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Keeping Product aligned throughout the entire research process contributed to Product supporting and adopting the findings. This spanned from participant selection to reporting on employee tasks of most interest.</p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Creating unique, readout documents for the executive and delivery teams allowed each audience to take role-appropriate next steps. The executive team readout, for example, helped to identify immediate roadmap changes. The delivery team readout, however, served as a point of reference for UX Design when creating wireframes and other designed-related artifacts.</p>

            </div> 
            
         

           </div>
         </div>

       
      </div>

     


      <div className="mt-[40px]">
     <Footer/>
     </div>
    </div>
    </div>
  )
}

export default DriverApp