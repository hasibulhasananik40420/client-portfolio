/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Helmet } from "react-helmet-async";
import DispatchingFaqSlider from "../../Components/DispatchingFaqSlider/DispatchingFaqSlider";

const AutomatedEquipmentDispatching = () => {
  return (
    <div>
      <Helmet>
        <title>Chad Smith | Automated Dispatching </title>
      </Helmet>

      <div className="bg-white">
        <Navbar />
        <div className="max-w-container mx-auto lg:px-[230px] xl:px-[230px] 2xl:[230px]  px-4 md:px-8 ">
          <div className="lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full">
            <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[28px] text-[24px] font-Montserrat font-bold tracking-[-0.5px]">
            New Feature: Automated Dispatching
            </h1>

            <p className="text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-semibold mt-2 md:mt-4 lg:mt-0 xl:mt-0 2xl:mt-0 ">
            Helping launch a new major feature
            </p>

            <h3 className="text-[#242424] text-[20px] mt-[40px] font-Montserrat font-bold leading-[34px]">
              Background
            </h3>

            <p className="mt-[20px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-medium md:leading-6 leading-6 tracking-[-0.1px] italic lg:w-[700px] xl:w-[790px] 2xl:w-[920px] w-full">
            Completed equipment rentals regularly sat on customer's job sites several days before being picked-up and returned back to the rental's branch.

            </p>

            <p className="mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full">
            My role was leading research in support of launching an artificial intelligence feature that would nudge employees to pick up equipment sooner. I led Experience Mapping to spotlight where the new feature may not address issues connected to returning equipment sooner. I also led Concept Testing to identify employee concerns with the automation feature, spotlight confusing and requested add-on features, and highlight training preferences. I also held a weekly meeting keeping Research, Operations and Training aligned on research needs and, where appropriate, quickly aligning on findings.
            </p>

            <p className="mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full">
            To build greater awareness on current day challenges when picking up equipment, I led A Day in The Life Panel Discussion with the employee group (i.e. Equipment Dispatchers) responsible for scheduling equipment pickups. This touchpoint allowed various Product Managers (e.g. e-commerce, sales & services) to understand where their products created downstreams issues during pickups. I also served as a reviewer of a narrative document highlighting Equipment Dispatchers' Day in The Life (both pre-release and post-release of the feature). In addition, I supported an ease-of-use and satisfaction benchmark of the Equipment Dispatcher's application pre-release of the feature.
            </p>

            <p className="mt-[10px] text-[#242424] md:text-[16px] text-[14px] font-Montserrat font-normal md:leading-6 leading-6 tracking-[-0.1px] lg:w-[790px] xl:w-[790px] 2xl:w-[910px] w-full">
            My research elevated urgency of an identified - but not yet scheduled - roadmap item connected to pick up delays. My findings also led to training format changes (e.g. including in-person, hands-on training) in support of rolling out the feature.
            </p>
          </div>

        

          <div className="mt-[40px]">
            <h1 className="text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]">
              Work Samples
            </h1>

            {/*********** slider here ****************/}
            <div className="mt-[20px]">
              <DispatchingFaqSlider />
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
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6  ">
                Equipment pickup delays were sometimes due to Drivers unknowingly bringing a truck that was unable to reach and/or load the equipment. Pickup delays were also connected to customers moving equipment to new locations that required long-distance travel. 
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                Equipment Dispatchers requested in-person, hands-on training that simulated completing a standard task with the new artificial intelligence feature assisting.
                </p>
              </div>

             

             
            </div>
          </div>


           <div className="mt-[40px]">
            <h1 className="text-[#242424] text-[20px] font-bold font-Montserrat leading-[28px]">
            Impact
            </h1>

            <div className="flex flex-col lg:w-[800px] xl:w-[800px] 2xl:w-[950px]w-full">
              <div className="flex gap-4 mt-5">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                Functionality was prioritized and implemented to the nudge branch closest to the equipment, to pick up the equipment, if the customer moved the equipment into a new region.
                </p>
              </div>

              <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6 ">
                Training changed course and, instead of relying solely on e-learning courses, included in-person training sessions into rolling planning of the artificial intelligence feature
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
                When integrating artificial intelligence features into employee’s work tools, Research partnering with Training is a good idea. This partnership creates multiple surveying opportunities to understand feature perception. One opportunity, for example, exists after conducting training, while another opportunity exists after a few weeks of using the feature.               </p>
              </div>

              {/* <div className="flex gap-4 mt-[10px]">
                <span className="w-[20px] h-[27px] flex justify-center items-center">
                  <p className="w-2 h-2 rounded-full bg-[#242424]"></p>
                </span>
                <p className="text-[#2B2B2B] md:text-[16px] text-[14px] font-normal font-Montserrat md:leading-6 leading-6">
                Once tech feasibility stages have been completed, I would recommend using the Kano Model to assess desirability of the vetted features to influence the order of slated roadmap items
                </p>
              </div> */}
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

export default AutomatedEquipmentDispatching;
