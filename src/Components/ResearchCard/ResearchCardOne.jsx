/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const ResearchCardOne = () => {

    const handleClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.href;
        // eslint-disable-next-line no-useless-escape
        const targetId = href.replace(/.*\#/, "");
        const ele = document.getElementById(targetId);
        ele?.scrollIntoView({
          behavior: "smooth",
        });
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link) => {
          link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
      };

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-containerX mx-auto px-4 md:px-8 lg:px-4 py-[70px]">

     {/* card1 */}
     <Link to='#OwnedResearch' onClick={handleClick} className="2xl:w-[424px] lg:w-[400px] w-full bg-white border-[1px] border-[#28163B] rounded-[4px] p-6 hover:bg-[#28163B] duration-300 cursor-pointer group">
       <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] group-hover:text-white">
         Owned Research
       </h1>
       <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4 group-hover:text-white">
       The process began with a desk research and assumption mapping workshop, followed by discussions with the Product team to identify ongoing pain points and desired task observations. A contextual inquiry involved spending a day with a product user, asking probing questions, capturing photos of tasks and pain points, and presenting these findings in a format suitable for leadership in XD and Product. Finally, a prioritization workshop categorized the insights by impact and guided the determination of requirements for the next-generation product's MVP.



       </p>

       <span className="flex items-center gap-3 mt-4">
         <Link to='#OwnedResearch' onClick={handleClick}
           className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4 group-hover:text-white"
           
         >
           Learn More
         </Link>
         <GoArrowRight className="text-black group-hover:text-white" />
       </span>
     </Link>

     {/* card2 */}
     <Link to='#SupportedResearch' onClick={handleClick} className="2xl:w-[424px] lg:w-[400px] w-full bg-white border-[1px] border-[#28163B] rounded-[4px] p-6 hover:bg-[#28163B] duration-300 cursor-pointer group">
       <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] group-hover:text-white">
       Supported Research
       </h1>
       <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4 group-hover:text-white">
       The process involved creating a journey map to assist XD in understanding how additional observations aligned with typical pain points in a standard day. Current state and future state narratives were developed to explain a product user's daily tasks, high-impact issues, and how pain points would be addressed. Additionally, personas were created to summarize findings and opportunities based on the types of tasks performed by users. Lastly, I served as a reviewer in a UMUX-Lite benchmarking effort to establish a baseline metric for user satisfaction with the existing product before its release.

       </p>

       <span className="flex items-center gap-3 mt-4">
         <Link to='#SupportedResearch' onClick={handleClick}
           className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4 group-hover:text-white"
      
         >
           Learn More
         </Link>
         <GoArrowRight className="text-black group-hover:text-white" />
       </span>
     </Link>

     {/* card3 */}
     <Link to='#ProposedResearch' onClick={handleClick} className="2xl:w-[424px] lg:w-[400px] w-full bg-white border-[1px] border-[#28163B] rounded-[4px] p-6 hover:bg-[#28163B] duration-300 cursor-pointer group">
       <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] group-hover:text-white">
       Proposed Future Research
       </h1>
       <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4 group-hover:text-white">
       The process involved conducting concept and usability testing to gather feedback on the MVP's conceptual designs and assess its ease of use for completing tasks. Additionally, UMUX-Lite benchmarking was carried out post-release, where satisfaction with the product was benchmarked at specific intervals as the MVP features were incorporated into the product.

       </p>

       <span className="flex items-center gap-3 mt-4">
         <Link to='#ProposedResearch' onClick={handleClick}
           className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4 group-hover:text-white"
          
         >
           Learn More
         </Link>
         <GoArrowRight className="text-black group-hover:text-white" />
       </span>
     </Link>
   </div>
</div>
  )
}

export default ResearchCardOne