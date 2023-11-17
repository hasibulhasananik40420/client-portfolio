/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import SliderOne from "../Slider/SliderOne";
import { Link } from "react-router-dom";
import SliderTwo from "../Slider/SliderTwo";
import SliderThree from "../Slider/SliderThree";
import SliderFour from "../Slider/SliderFour";
import Footer from "../Footer/Footer";

const ImpactContainer = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };


  const handleScroll = (e) => {
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
    <div className="">
      <div className="bg-[#FBF7FF] lg:h-[500px] h-full py-[60px]">
        <div className="max-w-containerX mx-auto px-4 md:px-8 lg:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* part 1 */}

          <div className="lg:w-[420px] w-full">
            <p className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mb-4">
              Owned Research
            </p>

            <div className="flex flex-col gap-3">
              {/* number 1 */}
              <Link
                onClick={handleScroll}
                className="border-[1px] border-[#28163B] px-6 flex items-center h-[100px] cursor-pointer nav-link hover:bg-[#28163B] duration-300 group"
                to="#OwnedResearch"
                style={{ borderRadius: "4px 4px 0px 0px" }}
              >
                <p className="text-[16px] text-[#2B2B2B] font-semibold font-Montserrat leading-6 group-hover:text-white">1. Research Prioritization</p>
                {/* <span className="flex justify-between items-center lg:w-[396px] w-full">
                   <p>
                    1. Research Prioritization
                  </p>
                  <PiArrowBendLeftDownLight className="text-white" />
                </span> */}
              </Link>
              {/* number 2 */}
              <Link
                onClick={{handleScroll,toggleActiveState}}
                className=" border-[1px] border-[#28163B] rounded-sm px-6 flex items-center h-[100px] cursor-pointer nav-link hover:bg-[#28163B] duration-300 group"
                to="#DiscoveryResearch"
                style={{ borderRadius: "4px 4px 0px 0px" }}
              >
                <p className="text-[16px] text-[#2B2B2B] font-semibold font-Montserrat leading-6 group-hover:text-white">
                  1. Discovery Research
                </p>
              </Link>

              {/* number 3*/}
              <Link
                onClick={handleScroll}
                className=" border-[1px] border-[#28163B] rounded-sm px-6 flex items-center h-[100px] cursor-pointer nav-link hover:bg-[#28163B] duration-300 group"
                to="#JourneyMapping"
                style={{ borderRadius: "4px 4px 0px 0px" }}
              >
                <p className="text-[16px] text-[#2B2B2B] font-semibold font-Montserrat leading-6 group-hover:text-white">
                  3. Journey Mapping
                </p>
              </Link>
            </div>
          </div>

          {/* part 2 */}
          <div className="lg:w-[420px] w-full">
            <p className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mb-4">
              Supported Research
            </p>

            {/* number 1 */}
            <Link onClick={handleScroll}   to="#SupportedResearch"
              className=" border-[1px] border-[#28163B] rounded-sm px-6 flex items-center h-[100px] cursor-pointer nav-link hover:bg-[#28163B] duration-300 group"
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p className="text-[16px] text-[#2B2B2B] font-semibold font-Montserrat leading-6 group-hover:text-white">
                3. UMUX-Lite Benchmarking (Pre-release)
              </p>
            </Link>
          </div>

          {/* part 3 */}
          <div className="lg:w-[420px] w-full">
            <p className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px] mb-4">
              Proposed Future Research
            </p>

            <div className="flex flex-col gap-3">
              {/* number 1 */}
              <Link onClick={handleScroll}  to="#ConceptTesting"
                className=" border-[1px] border-[#28163B] rounded-sm px-6 flex items-center h-[100px] cursor-pointer nav-link hover:bg-[#28163B] duration-300 group"
                style={{ borderRadius: "4px 4px 0px 0px" }}
              >
                <p className="text-[16px] text-[#2B2B2B] font-semibold font-Montserrat leading-6 group-hover:text-white">
                  3. Concept Testing
                </p>
              </Link>
              {/* number 2 */}

              <Link onClick={handleScroll}  to="#Post-release"
                className=" border-[1px] border-[#28163B] rounded-sm px-6 flex items-center h-[100px] cursor-pointer nav-link hover:bg-[#28163B] duration-300 group"
                style={{ borderRadius: "4px 4px 0px 0px" }}
              >
                <p className="text-[16px] text-[#2B2B2B] font-semibold font-Montserrat leading-6 group-hover:text-white">
                2. UMUX-Lite Benchmarking (Post-release, 2 & 8 weeks after)
                </p>
              </Link>

            
            </div>
          </div>
        </div>
      </div>

      {/*  content 1 here */}

      <div className="bg-white mt-[90px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4">
        <h1
          className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3"
          id="OwnedResearch"
        >
          Owned Research
        </h1>

        {/* item 1 */}
        <div className="lg:flex items-center justify-between mt-[48px]">
          <div className="lg:w-[560px] w-full">
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Research Prioritization
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderOne />
          </div>
        </div>

        {/* item 2 */}
        <div className="lg:flex items-center justify-between mt-[120px]">
          <div className="lg:w-[560px] w-full">
            <h1
              className="text-black text-[32px] font-semibold leading-[44px] font-Playfair"
              id="DiscoveryResearch"
            >
              Discovery Research
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderTwo />
          </div>
        </div>

        {/* item 3 */}
        <div className="lg:flex items-center justify-between mt-[120px]">
          <div className="lg:w-[560px] w-full">
            <h1
              className="text-black text-[32px] font-semibold leading-[44px] font-Playfair"
              id="JourneyMapping"
            >
              Journey Mapping
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderThree />
          </div>
        </div>
      </div>




      
         {/*  content 2 here */}
      <div className="bg-white mt-[90px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4">
        <h1
          className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3"
          id="SupportedResearch"
        >
         Supported Research
        </h1>

        <div className="lg:flex items-center justify-between mt-[48px]">
          <div className="lg:w-[620px] w-full">
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
             UMUX-Lite Benchmarking (Pre-release)
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderFour />
          </div>
        </div>





      </div>



  {/*  content 3 here */}
      <div className="bg-white mt-[90px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4">
        <h1
          className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3"
         
        >
           Proposed Future Research
        </h1>

        <div className="lg:flex items-center justify-between mt-[48px]">
          <div className="lg:w-[620px] w-full">
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair"  id="ConceptTesting">
            Concept Testing
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderOne />
          </div>
        </div>



  <div className="lg:flex items-center justify-between mt-[110px]">
          <div className="lg:w-[620px] w-full">
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair" id="Post-release">
            UMUX-Lite Benchmarking (Post-release)
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderOne />
          </div>
        </div>





      </div>



     {/* footer */}

     <div className="pt-20">
     <Footer/>
     </div>

    </div>
  );
};

export default ImpactContainer;
