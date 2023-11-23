/* eslint-disable no-unused-vars */
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom';

const ResearchCard = () => {

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
          <div className="2xl:w-[424px] lg:w-[400px] w-full bg-white border-[1px] border-[#28163B] rounded-[4px] p-6 hover:bg-[#28163B] duration-300 cursor-pointer group">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] group-hover:text-white">
              Owned Research
            </h1>
            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4 group-hover:text-white">
            The purpose of this research was to help derisk the rollout of a new product through understanding the user bases most pressing needs, comparing those needs against the current product roadmap, collecting feedback on the upcoming product, collecting feedback on the trainings events and measuring satisfaction and ease-of-use of the new product when launched in pilot groups at specific intervals of time


            </p>

            <span className="flex items-center gap-3 mt-4">
              <Link to='#OwnedResearch' onClick={handleClick}
                className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4 group-hover:text-white"
                
              >
                Learn More
              </Link>
              <GoArrowRight className="text-black group-hover:text-white" />
            </span>
          </div>

          {/* card2 */}
          <div className="2xl:w-[424px] lg:w-[400px] w-full bg-white border-[1px] border-[#28163B] rounded-[4px] p-6 hover:bg-[#28163B] duration-300 cursor-pointer group">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] group-hover:text-white">
            Supported Research
            </h1>
            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4 group-hover:text-white">
            This purpose of this research was to help simplify the day-in-the-life understanding of target user group before and after the product launched. This phase also created baseline satisfaction and ease-of-use metric of the existing product being used, to compare the new product being introduced to the target user group against.
            </p>

            <span className="flex items-center gap-3 mt-4">
              <Link to='#SupportedResearch' onClick={handleClick}
                className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4 group-hover:text-white"
           
              >
                Learn More
              </Link>
              <GoArrowRight className="text-black group-hover:text-white" />
            </span>
          </div>

          {/* card3 */}
          <div className="2xl:w-[424px] lg:w-[400px] w-full bg-white border-[1px] border-[#28163B] rounded-[4px] p-6 hover:bg-[#28163B] duration-300 cursor-pointer group">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] group-hover:text-white">
            Proposed Future Research
            </h1>
            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4 group-hover:text-white">
            The purpose of this research is to measure adoption and retention of the new product, while collecting feedback on the product’s future state “concept car” and also quantifying unmet needs that the future state will need to address

            </p>

            <span className="flex items-center gap-3 mt-4">
              <Link to='#ProposedResearch' onClick={handleClick}
                className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4 group-hover:text-white"
               
              >
                Learn More
              </Link>
              <GoArrowRight className="text-black group-hover:text-white" />
            </span>
          </div>
        </div>
    </div>
  )
}

export default ResearchCard