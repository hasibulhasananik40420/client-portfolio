/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet-async";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import FuelStopsFaqSlider from "../../Components/FuelStopsFaqSlider/FuelStopsFaqSlider";

const SuggestedFuelStops = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Chad Smith | Suggested Fuel Stops</title>
      </Helmet>

      <div className="bg-white">
        <Navbar />
        <div className="max-w-containerX mx-auto lg:px-[230px] xl:px-[230px] 2xl:px-16  px-4 md:px-8 mt-[48px]">
          <div className="lg:w-[800px] xl:w-[800px] 2xl:w-[1100px] w-full">
            <h1 className="text-[#242424] 2xl:text-[42px] xl:text-[34px] lg:text-[34px] text-[34px] font-Montserrat font-bold md:leading-[52px] leading-[50px] tracking-[-0.5px]">
              New ML/AI Feature: Suggested Fuel Stops
            </h1>

            <p className="text-[#242424] text-[20px] mt-4 font-Montserrat font-semibold leading-[30px]">
              Pinpointing opportunities to introduce an automation feature
            </p>

            <h3 className="text-[#242424] text-[24px] mt-[66px] font-Montserrat font-bold leading-[34px]">
              Background
            </h3>

            <p className="mt-[18px] text-[#242424] text-[20px] font-Montserrat font-medium leading-8 tracking-[-0.1px] italic">
              Drivers were not regularly stopping at fuel pumps with negotiated
              company pricing
            </p>

            <p className="mt-[38px] text-[#242424] text-[20px] font-Montserrat font-normal leading-8 tracking-[-0.1px]">
              My role was to understand how Drivers currently stop for fuel, to
              inform a feature that suggested fuel stops containg negotiated
              pricing. I used Desk Research, Critical Incident Technique and
              Experience Mapping to visualize how length of trip impacted when
              fuel stop suggestions should appear. These findings informed the
              MVP direction of integrating fuel stop suggestions into our Driver
              application.
            </p>
          </div>

        

          <div className="mt-[66px]">
            <h1 className="text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]">
              Work Samples
            </h1>

            {/*********** slider here ****************/}
            <div className="mt-[18px]">
              <FuelStopsFaqSlider />
            </div>
          </div>

          <div className="mt-[66px]">
            <h1 className="text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]">
              Research Findings
            </h1>

            <div className="flex flex-col gap-4 mt-[34px] lg:w-[800px] xl:w-[800px] 2xl:w-[1100px] w-full">
              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                Fueling behavior is driven by whether Drivers are taking short-distance or long-distance trips
                </p>
              </div>

              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                Staying away from highest price gas & fuel stations without certain accommodations is most important when selecting fuel stations
                </p>
              </div>

              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8 ">
                Long-distance and short-distance Drivers will likely use suggested fuel stops differently
                </p>
              </div>

              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                Knowing savings-to-company will likely impact whether short-distance Drivers add more time to route to travel to suggest stop
                </p>
              </div>
            </div>
          </div>


            <div className="mt-[66px]">
            <h1 className="text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]">
            Impact
            </h1>

            <div className="flex flex-col gap-4 mt-[34px] lg:w-[800px] xl:w-[800px] 2xl:w-[1100px] w-full">
              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                Feasibility to build ideal feature, based on discovery research, was discussed
                </p>
              </div>

              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                Limitations identified were co-designed into an MVP-direction and also vetted with a larger technical audience.
                </p>
              </div>

            </div>
          </div>








          <div className="mt-[66px]">
            <h1 className="text-[#242424] text-[24px] font-bold font-Montserrat leading-[34px]">
              Personal Learnings
            </h1>

            <div className="flex flex-col gap-4 mt-[34px] lg:w-[800px] xl:w-[800px] 2xl:w-[1100px] w-full">
              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                When conducting discovery research for a new feature, the research readout meeting should both explain the users perspective and create space for innovation discussion & identifying additional research needs.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] text-[20px] font-normal font-Montserrat leading-8">
                I would also recommend going into a tech feasibility discussion, and possibly doing some early concept designing, before doing discovery research. This can help bring teams together in co-designing solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[92px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SuggestedFuelStops;
