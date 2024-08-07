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
            Aligning feature direction with user needs
            </p>

            <h3 className="text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]">
              Background
            </h3>

            <p className="mt-[20px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-medium md:leading-6 leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full">
            Drivers were not stopping at gas stations with negotiated company pricing.
            </p>

            <p className="mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full">
            My role was understanding how Drivers currently stop for fuel. This research helped build a feature that suggested fuel stops with negotiated pricing. I used Semi-structured Interviews and Journey Mapping to visualize how trip duration may influence suggested fuel stop adoption. These findings informed what type of fuel stop and when fuel stop suggestions should appear in the Driver’s application. The insight guided discussions on critical features required and unachievable in the first release.             </p>
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
                
                 <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                   Fueling behavior is driven by whether Drivers are taking short-distance or long-distance trips 
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                Long-distance Drivers fuel to safely reach and return from far locations, while Short-distance Drivers fuel when starting the day and prepping for the next day

                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                Knowing savings-to-company would likely impact whether Short-distance Drivers travel further to reach a suggested fuel stop

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
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                Semi-structured Interviews provided the groundwork to discuss and begin vetting technical feasibility of an ideal user experience

                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat leading-6  ">
                Journey Mapping, based on past task analysis research and Semi-structured Interview findings, visualized how suggested fuel stop prompts could appear to align with Drivers current ways of working



                </p>
              </div> 
              <div className="flex gap-4 mt-[10px]">
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat leading-6  ">
                Journey Mapping findings guided additional technical discussions on critical features required and unachievable in the first release


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
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                When conducting discovery research for a new feature, the research readout meeting should both explain the users perspective and create space for early technical feasibility discussion to identify additional research needs.
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
              <div>
              <span className="inline-block h-2 w-2 bg-black rounded-full"></span>
                  </div>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                In some cases, if a new feature is severely limited by technical restraints, I recommend including technical limitation questions in the research planning phase. The underlying reason is because the ideal user experience may be completely unfeasible given the technical limitations. And although discovery interviews should be open-ended and unbiased, without knowing technology limitations upfront you cannot gather feedback on how certain limitations may impact the user. Certain technical limitations, for example, may so severely hinder the user’s experience that reprioritizing or additional planning for the feature is called into question. This missing insight ultimately affects the actionability of the research.


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
