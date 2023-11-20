import ImpactCard from "../../Components/ImpactCard/ImpactCard";
import Navbar from "../../Components/Navbar/Navbar";
import SectionCard from "../../Components/SectionCard/SectionCard";

const DetailsThree = () => {
  return (
    <div className="bg-white">
      <Navbar/>
      <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 mt-[60px]">
        <p className="text-[#2B2B2B] text-[16px] font-Playfair font-normal leading-6">
          New Feature,
        </p>
        <p className="text-[#2B2B2B] text-[24px] font-Playfair font-medium leading-[34px]">
          Suggested Fuel Stops
        </p>

        <p className="text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px] mt-11">
          Executive Summary
        </p>

        <div className="lg:flex items-center gap-[120px]">
          <div className="lg:w-[740px] w-full">
            <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
              Objective
            </h2>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
              To develop an intelligent fuel stop recommendation application
              that optimizes fueling decisions for drivers, leveraging real-time
              data, user preferences, and environmental factors, with the aim of
              reducing fuel consumption, travel time, and overall travel costs
              while enhancing user convenience and minimizing the environmental
              impact of road transportation
            </p>

            <h2 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mt-6">
              Hypothesis
            </h2>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
              To develop an intelligent fuel stop recommendation application
              that optimizes fueling decisions for drivers, leveraging real-time
              data, user preferences, and environmental factors, with the aim of
              reducing fuel consumption, travel time, and overall travel costs
              while enhancing user convenience and minimizing the environmental
              impact of road transportation
            </p>
          </div>

          <div className="lg:w-[448px] w-full mt-10 md:mt-10 lg:mt-0">
            <img
              className="lg:w-[448px] object-cover w-full h-[492px] rounded-lg"
              src="https://img.freepik.com/free-photo/side-view-man-gas-station_23-2150697514.jpg?w=360&t=st=1700148162~exp=1700148762~hmac=08eb9ed6c92f16d8c0894847261645b2c5e07b9f8daac220895057da4b68c579"
              alt=""
            />
          </div>
        </div>

        <div className="mt-[90px] px-4 md:px-8 lg:px-4">
          <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
            Impact
          </h1>

          <ImpactCard />
        </div>
      </div>

      <div className="">

       <SectionCard/>
        
      </div>


      {/* <div className="pt-20">
     <Footer/>
     </div> */}
    </div>
  );
};

export default DetailsThree;
