/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ResearchImpactCard from '../../Components/ResearchImpact/ResearchImpactCard'
import SectionCardTwo from '../../Components/SectionCardTwo/SectionCardTwo'
import Footer from '../../Components/Footer/Footer'

const DetailsTwo = () => {
  return (
    <div>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 mt-[60px]">
        <p className="text-[#2B2B2B] text-[16px] font-Playfair font-normal leading-6">
        New Product,
        </p>
        <p className="text-[#2B2B2B] text-[24px] font-Playfair font-medium leading-[34px]">
        Transportation Optimizer 

        </p>

       

        <div className="lg:flex items-center gap-[120px] mt-10 md:mt-10 lg:mt-0">
          <div className="lg:w-[740px] w-full">
            <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
            Hypothesis
            </h2>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
            Using a smart dispatching system can reduce the number of days equipment sits idle at job sites. This will result in equipment being used more often.
            </p>

            <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mt-6">
            Objective 
            </h2>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
            In support of the team's hypothesis, I conducted discovery research to understand what existing pain points contributed to equipment sitting idle. This research also helped spotlight whether our product and product roadmap addressed the documented issues. I also conducted evaluating research, testing the product with potential end-users. These findings were created to help inform our training direction and material. As the product rolled out, I created surveys measuring user satisfaction at specific time intervals; as well as surveys measuring how confident users felt using the new product after completing training. For proposed future research, focus was monitoring adoption and retention rates, gathering feedback on the future version of the product, and quantifying future features likelihood to satisfy users .

            </p>
          </div>

          <div className="lg:w-[448px] w-full mt-14 md:mt-14 lg:mt-0">
            <img
              className="lg:w-[448px] object-cover w-full h-[492px] rounded-lg"
              src="https://img.freepik.com/free-photo/elegant-woman-standing-gas-station_1157-33894.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=sph"
              alt=""
            />
          </div>
        </div>

        <div className="mt-[90px] px-4 md:px-8 lg:px-4">
          <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Research Impact
          </h1>

          <ResearchImpactCard />
        </div>
      </div>

      <div className="">

       <SectionCardTwo/>
        
      </div>


      <div className="pb-20">
     <Footer/>
     </div>
    </div>
    </div>
  )
}

export default DetailsTwo