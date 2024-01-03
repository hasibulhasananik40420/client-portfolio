/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async"
import Navbar from "../../Components/Navbar/Navbar"
import FaqSlider from "../../Components/FaqSlider/FaqSlider"




const DetailsFour = () => {

  

  return (
    <div className="bg-white mb-20">
       <Helmet>
        <title>Chad Smith | Suggested Fuel Stops</title>
       
      </Helmet>
      <Navbar/>


      <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 mt-[60px]">
          <h1 className="text-black text-[48px] font-Montserrat font-semibold leading-[60px]">New ML/AI Feature: Automated Dispatching</h1>

          <p className="text-black text-[20px] mt-5 font-Montserrat font-normal leading-[30px]">Deploying major changes that automate key employee responsibilities</p>

          <div className="mt-[74px]">
            <h3 className="text-black text-[24px] font-Montserrat font-semibold leading-[34px]">Context</h3>

            <p className="text-black text-[18px] mt-5 font-Montserrat font-normal leading-7">Research & Insights was tasked with supporting a new ML/AI feature that would be integrated into an existing application. This ML/AI feature would automate an end-of-day activity for planning next day equipment deliveries.</p>
            
             <p className="text-black text-[18px] mt-[32px] font-Montserrat font-normal leading-7">My role was leading to of the product roadmap for that application. I led using Experience Mapping to assess whether the ML feature would address collected issues during the end-of-day activity. I also led Concept Testing and supported a baseline experience measurement of the application pre-integration of the ML feature.</p> 
             
              <p className="text-black text-[18px] mt-[32px] font-Montserrat font-normal leading-7">For larger team communication, I also led a Day-in-Life panel discussion of the employee group to help further elevate their existing pain points.</p> 
              
              <p className="text-black text-[18px] mt-[32px] font-Montserrat font-normal leading-7">My research's impact included helping raise the prioritization of future a roadmap item and identifying training needs. I also held a weekly interlock meeting keeping Research, Operations and Training aligned to identify research needs and stay aligned on findings.</p>
          </div>

           <div className="mt-[120px]">

           <h3 className="text-black text-[24px] font-Montserrat font-semibold leading-[34px]">Business Challenge</h3>

           <p className="text-black text-[18px] mt-4 font-Montserrat font-normal leading-7 line-through">Completed equipment rentals regularly sat on customer's job sites several days before being picked-up and returned to back the rental's branch</p> 
              
            <h3 className="text-black text-[24px] mt-6 font-Montserrat font-semibold leading-[34px]">Hypotheses</h3>

           <p className="text-black text-[18px] mt-4 font-Montserrat font-normal leading-7 line-through">Decreasing DOT violations can be done by providing Drivers more insights before getting en route to job sites</p> 
              
              <h3 className="text-black text-[24px] mt-[32px] font-Montserrat font-semibold leading-[34px]">Outputs</h3>

           <p className="text-black text-[18px] mt-4 font-Montserrat font-normal leading-7 line-through">Research methods and processes used</p> 
              

           </div>

            {/*********** slider here ****************/}
             <div>
                 <FaqSlider/>
             </div>

       

      </div>


    </div>
  )
}

export default DetailsFour