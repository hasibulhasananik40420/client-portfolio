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
        <title>Chad Smith | Driver App</title>
       
      </Helmet>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:[230px]  px-4 md:px-8 mt-[12px]">
       
       <div className=' lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>
       <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] text-[24px] font-Montserrat font-bold tracking-[-0.5px]">Product Redesign: Driver Application</h1>
     
     <p className='text-[#242424] text-[16px] font-Montserrat font-semibold '>Creating a repeatable process for redesigning products</p>
    
       

       <h3 className='text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]'>Background</h3>

        <p className='mt-[20px] text-[#242424] text-[16px] font-Montserrat font-medium leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full'>Research & Insights, in collaboration Experience Design, was tasked with redesigning an existing employee application. In addition, the teams' director tasked both teams with creating a process that could be reused on future product redesigns across other employee applications.</p>

         <p className='mt-[10px] text-[#242424] text-[16px] font-Montserrat font-normal leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full'>My role was conducting observational research and prioritizing findings with Product. My findings were then reused by Experience Design to build additional documents (e.g. Journey Maps, Personas & Storyboards) to inform the first redesign</p>


       </div>



          <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Work Samples</h1>


            {/*********** slider here ****************/}
            <div className='mt-[20px]'>
                 <FaqSlider/>
             </div>
           </div>



         <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Research Findings</h1>


           <div className='flex flex-col mt-[20px] lg:w-[800px] xl:w-[800px] 2xl:w-[930px] w-full'>

           <div className='flex gap-4'>
              <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6 '>Drivers are missing features when completing daily tasks, which opens the door for human error and reliance on third-party tools</p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px]  font-normal font-Montserrat leading-6 '>Drives are impacted by inaccurate or incomplete customer data entered by employees</p>

            </div> 
            
            <div className='flex gap-4 mt-[10px]'>
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6'>Driver need customers to follow company policies to reduce wasted employee hours</p>

            </div>

           </div>
         </div>

            <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Impact</h1>


           <div className='flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[950px]w-full'>

           <div className='flex gap-4 mt-5'>
              <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6 '>Product aligned on what issues were addressable through user experience changes versus operational & multi-system changes</p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6 '>Product built a backlog of issues to address based on feasibility & urgency</p>

            </div> 
            
            <div className='flex gap-4 mt-[10px]'>
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6 '>One major feature was immediately redesigned and currently undergoing implementation</p>

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
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6 '>Keeping Product aligned throughout the entire research process was key to Product supporting and adopting the findings. This spanned from remaining connected on what type of participants were needed to what type of employee tasks were of most interest.</p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[16px] font-normal font-Montserrat leading-6 '>Creating readout documents for executive and delivery teams allowed each audience to take appropriate next steps. The executive team readout, for example, helped inform what immediate roadmap changes were needed. The delivery team readout, however, served as a point of reference for design when creating wireframes and other-related documents.</p>

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