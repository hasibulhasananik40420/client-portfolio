/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet-async';
import FaqSlider from '../../Components/FaqSlider/FaqSlider';
import ResearchCardOne from '../../Components/ResearchCard/ResearchCardOne';
import DrivingImpactCard from '../../Components/DrivingImpactCard/DrivingImpactCard';


const DetailsOne = () => {
  return (
    <div>
       <Helmet>
        <title>Chad Smith | Driver App</title>
       
      </Helmet>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 mt-[48px]">
       
       <div className='lg:w-[1056px] w-full'>
       <h1 className="text-[#242424] md:text-[42px] text-[34px] font-Montserrat font-bold md:leading-[52px] leading-[50px] tracking-[-0.5px]">Product Redesign: Driver Application</h1>
     
     <p className='text-[#242424] text-[20px] mt-4 font-Montserrat font-semibold leading-[30px]'>Creating a repeatable process for redesigning products</p>
    
       

       <h3 className='text-[#242424] text-[24px] mt-[66px] font-Montserrat font-bold leading-[34px]'>Background</h3>

        <p className='mt-[18px] text-[#242424] text-[20px] font-Montserrat font-medium leading-8 tracking-[-0.1px] italic'>Research & Insights, in collaboration Experience Design, was tasked with redesigning an existing employee application. In addition, the teams' director tasked both teams with creating a process that could be reused on future product redesigns across other employee applications.</p>

         <p className='mt-[38px] text-[#242424] text-[20px] font-Montserrat font-normal leading-8 tracking-[-0.1px]'>My role was conducting observational research and prioritizing findings with Product. My findings were then reused by Experience Design to build additional documents (e.g. Journey Maps, Personas & Storyboards) to inform the first redesign</p>


       </div>


        {/* <div>
        <h1 className="text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px] mt-[66px]">
              Research Impact
            </h1>

            <DrivingImpactCard/>


        </div> */}


        <div className='mt-[66px]'>
           <h1 className='text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]'>Work Samples</h1>


            {/*********** slider here ****************/}
            <div className='mt-[18px]'>
                 <FaqSlider/>
             </div>
           </div>



         <div className='mt-[66px]'>
           <h1 className='text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]'>Research Findings</h1>


           <div className='flex flex-col gap-4 mt-[34px]'>

           <div className='flex gap-4'>
              <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Drivers are missing features when completing daily tasks, which opens the door for human error and reliance on third-party tools</p>

            </div>

             <div className='flex gap-4'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Drives are impacted by inaccurate or incomplete customer data entered by employees</p>

            </div> 
            
            <div className='flex gap-4'>
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Driver need customers to follow company policies to reduce wasted employee hours</p>

            </div>

           </div>
         </div>

              <div className='mt-[66px]'>
           <h1 className='text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]'>Impact</h1>


           <div className='flex flex-col gap-4 mt-[34px]'>

           <div className='flex gap-4'>
              <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Product aligned on what issues were addressable through user experience changes versus operational & multi-system changes</p>

            </div>

             <div className='flex gap-4'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Product built a backlog of issues to address based on feasibility & urgency</p>

            </div> 
            
            <div className='flex gap-4'>
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>One major feature was immediately redesigned and currently undergoing implementation</p>

            </div>

           </div>
         </div>



        <div className='mt-[66px]'>
           <h1 className='text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]'>Personal Learnings</h1>


           <div className='flex flex-col gap-4 mt-[34px]'>

           <div className='flex gap-4'>
           <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Keeping Product aligned throughout the entire research process was key to Product supporting and adopting the findings. This spanned from remaining connected on what type of participants were needed to what type of employee tasks were of most interest.</p>

            </div>

             <div className='flex gap-4'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 lg:w-[1100px] w-full'>Creating readout documents for executive and delivery teams allowed each audience to take appropriate next steps. The executive team readout, for example, helped inform what immediate roadmap changes were needed. The delivery team readout, however, served as a point of reference for design when creating wireframes and other-related documents.</p>

            </div> 
            
         

           </div>
         </div>

       
      </div>

     


      <div className="mt-[92px]">
     <Footer/>
     </div>
    </div>
    </div>
  )
}

export default DetailsOne