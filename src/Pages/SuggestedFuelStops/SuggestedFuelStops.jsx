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
        <div className="max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:[230px]  px-4 md:px-8">
          <div className="lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full">
            <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] text-[24px] font-Montserrat font-bold tracking-[-0.5px]">
            New Feature: Suggested Fuel Stops
            </h1>

            <p className="text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-semibold mt-2 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0">
            Pinpointing opportunities to recommend fueling stations
            </p>

            <h3 className="text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]">
              Background
            </h3>

            <p className="mt-[20px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-medium md:leading-6 leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full">
              Drivers were not regularly stopping at fuel pumps with negotiated
              company pricing
            </p>

            <p className="mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full">
              My role was to understand how Drivers currently stop for fuel, to
              inform a feature that suggested fuel stops containg negotiated
              pricing. I used "Semi-structured Interviews" and Experience Mapping to visualize how length of trip impacted when
              fuel stop suggestions should appear. These findings informed the
              MVP direction of integrating fuel stop suggestions into our Driver
              application.
            </p>
          </div>

        

          <div className="mt-[40px]">
            <h1 className="text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]">
              Work Samples
            </h1>

            {/*********** slider here ****************/}
            <div className="mt-[20px]">
              <FuelStopsFaqSlider />
            </div>
          </div>

          <div className="mt-[40px]">
            <h1 className="text-[#242424] text-[20px]  font-bold font-Montserrat leading-[28px]">
              Research Findings
            </h1>

            <div className="flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[930px] w-full">
              <div className="flex gap-4 mt-[20px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                Fueling behavior is driven by whether Drivers are taking short-distance or long-distance trips
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                Staying away from highest price gas & fuel stations without certain accommodations is most important when selecting fuel stations
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                Long-distance and short-distance Drivers will likely use suggested fuel stops differently
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                Knowing savings-to-company will likely impact whether short-distance Drivers add more time to route to travel to suggest stop
                </p>
              </div>
            </div>
          </div>


            <div className="mt-[40px]">
            <h1 className="text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]">
            Impact
            </h1>

            <div className="flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full">
              <div className="flex gap-4 mt-5">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                Feasibility to build ideal feature, based on discovery research, was discussed
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat leading-6  ">
                Limitations identified were co-designed into an MVP-direction and also vetted with a larger technical audience.
                </p>
              </div>

            </div>
          </div>








          <div className="mt-[40px]">
            <h1 className="text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]">
              Personal Learnings
            </h1>

            <div className="flex flex-col lg:w-[790px] xl:w-[790px] 2xl:w-[930px] w-full">
              <div className="flex gap-4 mt-5">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                When conducting discovery research for a new feature, the research readout meeting should both explain the users perspective and create space for innovation discussion & identifying additional research needs.
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                I would also recommend going into a tech feasibility discussion, and possibly doing some early concept designing, before doing discovery research. This can help bring teams together in co-designing solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[40px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SuggestedFuelStops;
