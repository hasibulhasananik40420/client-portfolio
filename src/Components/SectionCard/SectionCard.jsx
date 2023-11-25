import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import arrow from '../../assets/arrow.svg'
import ResearchPrioritizationDataImage1 from "../../assets/slide1.png";
import ResearchPrioritizationDataImage2 from "../../assets/slide2.png";

import DiscoveryResearchImage1 from "../../assets/slide1.png";
import DiscoveryResearchImage2 from "../../assets/slide2.png";

import JourneyMappingImage1 from "../../assets/Slider4.png";
import JourneyMappingImage2 from "../../assets/slide2.png";



import CustomSlider from "../Slider/CustomSlider";
import ResearchCardThree from "../ResearchCard/ResearchCardThree";

const SectionCard = () => {


  const ResearchPrioritizationData =[
    {
      id:1 ,
      image:ResearchPrioritizationDataImage1,
      text:'Caption Text Lorem ipsum dolor sit amet consectetur'
    },{
      id:2 ,
      image:ResearchPrioritizationDataImage2,
      text:'Caption 2 Text Lorem ipsum dolor sit amet consectetur'
    },{
      id:3 ,
      image:ResearchPrioritizationDataImage1,
      text:'Caption 3 Text Lorem ipsum dolor sit amet consectetur'
    },
    {
      id:4 ,
      image:ResearchPrioritizationDataImage2,
      text:'Caption 4 Text Lorem ipsum dolor sit amet consectetur'
    }
  ]

const DiscoveryResearchData =[
    {
      id:1 ,
      image:DiscoveryResearchImage2,
      text:'Caption Text Lorem ipsum dolor sit amet consectetur'
    },{
      id:2 ,
      image:DiscoveryResearchImage1,
      text:'Caption 2 Text Lorem ipsum dolor sit amet consectetur'
    },{
      id:3 ,
      image:DiscoveryResearchImage2,
      text:'Caption 3 Text Lorem ipsum dolor sit amet consectetur'
    },
    {
      id:4 ,
      image:DiscoveryResearchImage1,
      text:'Caption 4 Text Lorem ipsum dolor sit amet consectetur'
    }
  ]

const JourneyMappingData =[
    {
      id:1 ,
      image:JourneyMappingImage1,
      text:'Caption Text Lorem ipsum dolor sit amet consectetur'
    },{
      id:2 ,
      image:JourneyMappingImage2,
      text:'Caption 2 Text Lorem ipsum dolor sit amet consectetur'
    },{
      id:3 ,
      image:JourneyMappingImage1,
      text:'Caption 3 Text Lorem ipsum dolor sit amet consectetur'
    },
    {
      id:4 ,
      image:JourneyMappingImage2,
      text:'Caption 4 Text Lorem ipsum dolor sit amet consectetur'
    }
  ]






  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState("button1");
  const [isMobile, setIsMobile] = useState(false);




   
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the screen width as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial value on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Large device threshold values
      let button1Threshold = 0;
      let button2Threshold = 3050;
      let button3Threshold = 3700;

      // Mobile device threshold values
      if (isMobile) {
        button1Threshold = 2900;
        button2Threshold = 6300;
        button3Threshold = 7800;
      }

      if (
        scrollPosition >= button1Threshold &&
        scrollPosition < button2Threshold
      ) {
        setActiveButton("button1");
      } else if (
        scrollPosition >= button2Threshold &&
        scrollPosition < button3Threshold
      ) {
        setActiveButton("button2");
      } else if (scrollPosition >= button3Threshold) {
        setActiveButton("button3");
      } else {
        setActiveButton("");
      }

      // Sticky navigation threshold based on the device type
      const scrollThreshold = isMobile ? 3400 : 1200;
      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);









  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     //  this positon for top side
  //     // const button1Threshold = 0;
  //     // const button2Threshold = 3250; // Adjust this value based on your specific requirements
  //     // const button3Threshold = 4000; // Adjust this value based on your specific requirements 
      
  //     //  this positon for bottom side
  //     const button1Threshold = 0;
  //     const button2Threshold = 3050; // Adjust this value based on your specific requirements
  //     const button3Threshold = 3700; // Adjust this value based on your specific requirements

  //     if (
  //       scrollPosition >= button1Threshold &&
  //       scrollPosition < button2Threshold
  //     ) {
  //       setActiveButton("button1");
  //     } else if (
  //       scrollPosition >= button2Threshold &&
  //       scrollPosition < button3Threshold
  //     ) {
  //       setActiveButton("button2");
  //     } else if (scrollPosition >= button3Threshold) {
  //       setActiveButton("button3");
  //     } else {
  //       setActiveButton(""); // You may want to set this to the default active button
  //     }
  //       // top side
  //     // const scrollThreshold = 1650; // Adjust this value based on your specific requirements
     
     
     
  //     //  bottom side
  //      const scrollThreshold = 1200; // Adjust this value based on your specific requirements

  //     setIsSticky(scrollPosition > scrollThreshold);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);




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
      <div className="bg-[#FBF7FF]">
        <div>
          <ResearchCardThree/>
        </div>

        {/* 3 item card here */}
        {/* visible fixed top-0 w-full bg-[#FBF7FF] */}

        <div
          className={`py-6 ${
            isSticky
              ? "visible fixed bottom-0 left-0 right-0 w-full bg-[#FBF7FF]"
              : "hidden"
          } z-30`}
        >
          <div
            className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-containerX mx-auto px-4 md:px-8 lg:px-4`}
          >
            {/* number 1 */}

            <Link to="#OwnedResearch" onClick={handleClick}
              className={`border-[1px] rounded-sm px-6 flex items-center justify-between h-[56px] cursor-pointer nav-link ${
                activeButton === "button1" ? "bg-[#28163B] text-white" : ""
              }`}
              
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p
                className={`text-[16px] text-[${
                  activeButton === "button1" ? "#FFFFFF" : "#2B2B2B"
                }] font-semibold font-Montserrat leading-6`}
              >
               Owned Research
              </p>
              {activeButton === "button1" && (
                // <PiArrowBendLeftDownLight className="text-white" />
                <img className="w-[24px] h-[24px]" src={arrow} alt="" />
              )}
            </Link>

            {/* number 2 */}

            <Link  to="#SupportedResearch" onClick={handleClick}
              className={`border-[1px] rounded-sm px-6 flex items-center justify-between h-[56px] cursor-pointer nav-link ${
                activeButton === "button2" ? "bg-[#28163B] text-white" : ""
              }`}
             
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p
                className={`text-[16px] text-[${
                  activeButton === "button2" ? "#FFFFFF" : "#2B2B2B"
                }] font-semibold font-Montserrat leading-6`}
              >
                Supported Research
              </p>
              {activeButton === "button2" && (
                <img className="w-[24px] h-[24px]" src={arrow} alt="" />
                )}
            </Link>

            {/* number 3*/}

            <Link  to="#ProposedResearch" onClick={handleClick}
              className={`border-[1px] rounded-sm px-6 flex items-center justify-between h-[56px] cursor-pointer nav-link ${
                activeButton === "button3" ? "bg-[#28163B] text-white" : ""
              }`}
             
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p
                className={`text-[16px] text-[${
                  activeButton === "button3" ? "#FFFFFF" : "#2B2B2B"
                }] font-semibold font-Montserrat leading-6`}
              >
                 Proposed Research
              </p>
              {activeButton === "button3" && (
                <img className="w-[24px] h-[24px]" src={arrow} alt="" />
                )}
            </Link>
          </div>
        </div>
      </div>

      {/* all content here */}

      {/*  content 1 here */}

      <div  className={` bg-white pt-[150px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4 `} id="OwnedResearch">
        <h1
          className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3"
        >
          Owned Research
        </h1>

        {/* item 1 */}
        <div className="lg:flex items-center justify-between mt-[48px]">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>

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

          <div className="">
           <CustomSlider images={ResearchPrioritizationData}/>
          </div>
        </div>

        {/* item 2 */}
        <div
          className="lg:flex items-center justify-between mt-[120px]"
          id="DiscoveryResearch"
        >
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
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

          <div className="">
            <CustomSlider images={DiscoveryResearchData} />
          </div>
        </div>

        {/* item 3 */}
        <div
          className="lg:flex items-center justify-between mt-[120px]"
          id="JourneyMapping"
        >
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
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

          <div className="">
            <CustomSlider images={JourneyMappingData} />
          </div>
        </div>
      </div>





      {/*  content 2 here */}
      <div className="bg-white pt-[170px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4"
        id="SupportedResearch"
      >
        <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Supported Research
        </h1>

        <div className="lg:flex items-center justify-between mt-[48px]">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Supported Research
              </p>
            </span>
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

          <div className=" ">
          <CustomSlider images={JourneyMappingData} />
          </div>
        </div>
      </div>

      {/*  content 3 here */}
      <div className="bg-white pt-[170px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4" id="ProposedResearch">
        <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Proposed Future Research
        </h1>

        <div
          className="lg:flex items-center justify-between mt-[48px]"
          id="ConceptTesting"
        >
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Proposed Future Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
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

          <div className="">
          <CustomSlider images={JourneyMappingData} />
          </div>
        </div>

        <div
          className="lg:flex items-center justify-between mt-[110px]"
          id="Post-release"
        >
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Proposed Future Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
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

          <div className="">
          <CustomSlider images={JourneyMappingData} />  
            </div>
        </div>



      </div>
    </div>
  );
};

export default SectionCard;
