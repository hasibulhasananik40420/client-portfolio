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
        <title>Chad Smith | Jobsite Moves</title>
       
      </Helmet>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:[230px]  px-4 md:px-8 ">
       
       <div className=' lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>
       <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] text-[24px] font-Montserrat font-bold tracking-[-0.5px]">Process Improvement: Jobsite Moves
       </h1>
     
       <p className='text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-semibold mt-2 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0'>Showing pain points in a process

       </p>
    
       

       <h3 className='text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]'>Background</h3>

        <p className='mt-[20px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-medium md:leading-6 leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full'>Employees used several applications and varying procedures to move customer’s rented equipment from one jobsite to another.
        </p> 
        
       

         <p className='mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full'>My role was documenting how employees moved rented equipment across jobsites. I used Critical Incident Technique (CIT) to understand and then visualize the equipment moving process. The visualization captured systems and steps commonly used, along with pain points experienced when moving equipment. The findings improved Product Management’s decision making in determining resourcing needs to improve the equipment moving process. 

         </p>

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
           <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Entering duplicate data into multiple systems led to Drivers going to the wrong location or not receiving the task to complete 
               </p>

            </div>

             <div className='flex gap-4 mt-[10px]'>
             <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px]  font-normal font-Montserrat md:leading-6 leading-6 '>Varying procedures led to downstream systems missing key information and, as a result, disabling key features
               </p>

            </div> 
            
            <div className='flex gap-4 mt-[10px]'>
            <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6'>Manual steps contributed to billing delays and omissions

</p>

            </div>

           </div>
         </div>

            <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Impact </h1>


           <div className='flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full'>

           <div className='flex gap-4 mt-5'>
           <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '> Product Management used the findings in roadmap planning discussions; specifically in  removing planned and adding new features to address reported pain points.



               </p>

            </div>

              <div className='flex gap-4 mt-5'>
           <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '> The findings guided Product Management to ultimately improve one application, instead of multiple applications, to remove data re-entry issues, enable a standardized process and automate billing for jobsite moves.





               </p>

            </div>

             

           </div>
         </div>



        <div className='mt-[40px]'>
           <h1 className='text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]'>Personal Learnings</h1>


           <div className='flex flex-col lg:w-[790px] xl:w-[790px] 2xl:w-[930px] w-full'>

           <div className='flex gap-4 mt-5'>
           <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
               <p className='text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 '>Creating a Service Design Blueprint requires making an extensive and general map. The extensive map captures detailed learnings, such as edge cases and sub-flows, to build a deep understanding of how a process works. The general map, however, aims to help stakeholders quickly grasp the procedure and improvement opportunities.  </p>

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