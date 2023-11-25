/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ResearchImpactCardOne from '../../Components/ResearchImpactCardOne/ResearchImpactCardOne'
import SectionCardOne from '../../Components/SectionCardOne/SectionCardOne'

const DetailsOne = () => {
  return (
    <div>
      <div className="bg-white">
      <Navbar/>
      <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 mt-[60px]">
        <p className="text-[#2B2B2B] text-[16px] font-Playfair font-normal leading-6">
        Driver App,
        </p>
        <p className="text-[#2B2B2B] text-[24px] font-Playfair font-medium leading-[34px]">
        Product Redesign  
        </p>

       

        <div className="lg:flex items-center gap-[120px] mt-10 md:mt-10 lg:mt-0">
          <div className="lg:w-[740px] w-full">
            <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
            Hypothesis
            </h2>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
            By implementing user-centered design principles and integrating real-time tracking technology, we hypothesize that the development of a next-generation mobile app for equipment logistics will result in a significant reduction in compliance violations, a substantial improvement in equipment traceability, a notable increase in customer satisfaction related to on-time deliveries, and a substantial decrease in operating costs for logistics tasks. 

            </p>

            <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mt-6">
            Objective 
            </h2>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
              dummy text here need to change Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt voluptatem expedita commodi excepturi, voluptas nesciunt qui inventore rerum aliquid repellendus ipsam dolore repudiandae doloribus temporibus reiciendis fugit asperiores maxime!

            </p>
          </div>

          <div className="lg:w-[448px] w-full mt-14 md:mt-14 lg:mt-0">
            <img
              className="lg:w-[448px] object-cover w-full h-[492px] rounded-lg"
              src="https://img.freepik.com/free-photo/man-putting-gasoline-fuel-into-his-car-pump-gas-station_1150-6631.jpg?size=626&ext=jpg&ga=GA1.1.1166836568.1647150580&semt=ais"
              alt=""
            />
          </div>
        </div>

        <div className="mt-[90px] px-4 md:px-8 lg:px-4">
          <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Research Impact
          </h1>

          <ResearchImpactCardOne />
        </div>
      </div>

      <div className="">

       <SectionCardOne/>
        
      </div>


      <div className="pb-20">
     <Footer/>
     </div>
    </div>
    </div>
  )
}

export default DetailsOne