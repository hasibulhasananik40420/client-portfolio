/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Helmet } from 'react-helmet-async';
import JobsiteMovesSlider from '../../Components/JobsiteMovesSlider/JobsiteMovesSlider';


const JobsiteMoves = () => {
  return (
    <div>
       <Helmet>
        <title>Chad Smith | Driver Application</title>
       
      </Helmet>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:[230px]  px-4 md:px-8 ">
       
       <div className=' lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>
       <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] text-[24px] font-Montserrat font-bold tracking-[-0.5px]">Process Improvement: Jobsite Moves
       </h1>
     
       <p className='text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-semibold mt-2 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>Improving connected systems when moving rented equipment across multiple job sites
       </p>
    
       

       <h3 className='text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]'>Background</h3>

        <p className='mt-[20px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-medium md:leading-6 leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full'>Employees used various systems, manual and undocumented procedures to move customer’s rented equipment from one jobsite to another
        </p> 
        
       

         <p className='mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full'>My role was to understand how employees moved rented equipment across jobsites, to build  features that consolidated the task system into fewer steps and systems used. I used Critical Incident Technique to understand and begin visualizing systems and steps commonly used, along with pain points experienced. Product immediately used the findings to pinpoint what system should be improved first, to better support the task of moving rented equipment across jobsites.</p>

       </div>



          <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Work Samples</h1>


            {/*********** slider here ****************/}
            <div className='mt-[20px]'>
                 <JobsiteMovesSlider/>
             </div>
           </div>



         <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px]  font-bold font-Montserrat leading-[28px]'>Research Findings</h1>


           <div className='flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[930px] w-full'>

           <div className='flex gap-4 mt-[20px]'>
              <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Using multiple systems to conduct a job site move led to data transfer issues, commonly resulting in employees going to the wrong location or not receiving task to complete</p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px]  font-normal font-Montserrat md:leading-6 leading-6 '>Using undocumented procedures led to downstream systems disabling key features, such as photo capturing moved equipment on a new job site
               </p>

            </div> 
            
            <div className='flex gap-4 mt-[10px]'>
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6'>Employees mentioned existing, manual processes leading to unbilled equipment moves, as paperwork confirming the move has been completed was sometimes unsigned or misplaced.

</p>

            </div>

           </div>
         </div>

            <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Research Impact </h1>


           <div className='flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>

           <div className='flex gap-4 mt-5'>
              <span className='w-[20px] h-[27px] flex justify-center items-center'>
                <p className='w-2 h-2 rounded-full bg-[#242424]'></p>
              </span>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Product used the research to refine each involved system’s roadmap, such as removing slated features in one roadmap and adding features in another roadmap, and began planning features to eliminate data transfer issues, unlocking disabled key features and automating equipment move billing.

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
            <span className='w-[20px] h-[27px] flex justify-center items-center'>
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
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>When creating Service Design Blueprints for complex procedures, think in-terms of creating two maps: an extensive and general map. The extensive map helps capture and align on what was learned. The general map helps stakeholders quickly grasp the procedure and where improvement opportunities exist. The extensive map captures detail edge cases and sub-flows, while the general map covers major steps and simply mentions the sub-flows. The general map is what is presented to stakeholders. The extensive map is used to secure a detailed understanding of how the process works.  </p>

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

export default JobsiteMoves