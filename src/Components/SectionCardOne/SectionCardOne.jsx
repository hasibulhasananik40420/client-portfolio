import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import arrow from "../../assets/arrow.svg";
import CustomSlider from "../Slider/CustomSlider";
import ResearchCardOne from "../ResearchCard/ResearchCardOne";

import DeskResearchAssumptionMappingWorkshopImage1 from '../../assets/driving-app/Owned Research/1.Desk Research + Assumption Mapping Workshop/01.png'


import ContextualInquiryImage1 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image (1).png";
import ContextualInquiryImage2 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image (2).png";
import ContextualInquiryImage3 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image (3).png";
import ContextualInquiryImage4 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image.png";
import ContextualInquiryImage5 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image(5).png";

import PrioritizationWorkshopImage1 from "../../assets/driving-app/Owned Research/3.Prioritization Workshop/image (1).png";
import PrioritizationWorkshopImage2 from "../../assets/driving-app/Owned Research/3.Prioritization Workshop/image.png";

import JourneyMapImage1 from "../../assets/driving-app/Supported Research/1.Journey Map/image (1).png";
import JourneyMapImage2 from "../../assets/driving-app/Supported Research/1.Journey Map/image (2).png";
import JourneyMapImage3 from "../../assets/driving-app/Supported Research/1.Journey Map/image.png";

import CurrentStateFutureStateNarrativesImage1 from "../../assets/driving-app/Supported Research/3.Future State Narrative/01.png";

import PersonasImage1 from "../../assets/driving-app/Supported Research/4.Personas/image.png";

import UMUXLiteBenchmarkingPreReleaseImage1 from "../../assets/driving-app/Supported Research/5.UMUX-Lite Benchmarking (Pre-Release)/01.png";
import UMUXLiteBenchmarkingPreReleaseImage2 from "../../assets/driving-app/Supported Research/5.UMUX-Lite Benchmarking (Pre-Release)/02.png";
import UMUXLiteBenchmarkingPreReleaseImage3 from "../../assets/driving-app/Supported Research/5.UMUX-Lite Benchmarking (Pre-Release)/03.png";

import ConceptUsabilityTestingImage1 from '../../assets/Placeholder.png'

import UMUXLiteBenchmarkingPostReleaseImage1 from '../../assets/Placeholder.png'


const SectionCardOne = () => {
  // part 1

  // number 1
  const DeskResearchAssumptionMappingWorkshopData = [
    {
      id: 1,
      image:DeskResearchAssumptionMappingWorkshopImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
   
  ];

  // number 2
  const ContextualInquiryData = [
    {
      id: 1,
      image: ContextualInquiryImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: ContextualInquiryImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image: ContextualInquiryImage3,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image: ContextualInquiryImage4,
      text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
    }, 
    {
      id: 5,
      image: ContextualInquiryImage5,
      text: "Caption 5 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  // number 3
  const PrioritizationWorkshopData = [
    {
      id: 1,
      image: PrioritizationWorkshopImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: PrioritizationWorkshopImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  //  part 2

  const JourneyMapData = [
    {
      id: 1,
      image: JourneyMapImage2,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: JourneyMapImage3,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image: JourneyMapImage1,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  const CurrentStateFutureStateNarrativesData = [
    {
      id: 1,
      image: CurrentStateFutureStateNarrativesImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },

   
  ];

  const PersonasData = [
    {
      id: 1,
      image: PersonasImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },

    
  ];

  const UMUXLiteBenchmarkingPreReleaseData = [
    {
      id: 1,
      image: UMUXLiteBenchmarkingPreReleaseImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },

    {
      id: 2,
      image: UMUXLiteBenchmarkingPreReleaseImage2,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: UMUXLiteBenchmarkingPreReleaseImage3,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  //part 3

  const ConceptUsabilityTestingData = [
    {
      id: 1,
      image:
      ConceptUsabilityTestingImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image:
      ConceptUsabilityTestingImage1,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image:
      ConceptUsabilityTestingImage1,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image:
      ConceptUsabilityTestingImage1,
      text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  const UMUXLiteBenchmarkingPostReleaseData = [
    {
      id: 1,
      image:
      UMUXLiteBenchmarkingPostReleaseImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image:
      UMUXLiteBenchmarkingPostReleaseImage1,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image:
      UMUXLiteBenchmarkingPostReleaseImage1,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image:
      UMUXLiteBenchmarkingPostReleaseImage1,
      text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

 

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
      let button2Threshold = 3400;
      let button3Threshold = 5800;

      // Mobile device threshold values
      if (isMobile) {
        button1Threshold = 3400;
        button2Threshold = 7100;
        button3Threshold = 10880;
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
      const scrollThreshold = isMobile ? 3400 : 1650;
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
      
  //     const button1Threshold = 0;
  //     const button2Threshold = 3400; 
  //     const button3Threshold = 5800; 

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
  //       setActiveButton("");
  //     }
     
  //     const scrollThreshold = 1200; 

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
          <ResearchCardOne />
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

            <Link
              to="#OwnedResearch"
              onClick={handleClick}
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
                <img className="w-[24px] h-[24px]" src={arrow} alt="" />
              )}
            </Link>

            {/* number 2 */}

            <Link
              to="#SupportedResearch"
              onClick={handleClick}
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

            <Link
              to="#ProposedResearch"
              onClick={handleClick}
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

      <div
        className={` bg-white pt-[150px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4 `}
        id="OwnedResearch"
      >
        <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Owned Research
        </h1>

        {/* item 1 */}
        <div className="lg:flex justify-between mt-[48px]">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>

            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Desk Research + Assumption Mapping Workshop
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This stage primarily focused on understanding what was previously
              documented or collectively known; as related to pain points of the
              product user. This phase also focused on identifying critical
              tasks to be observed and reported on. This phase introduced
              workshop facilitation as a part of the discovery research process.
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={DeskResearchAssumptionMappingWorkshopData} />
          </div>
        </div>

        {/* item 2 */}
        <div className="lg:flex justify-between mt-[120px]">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Contextual Inquiry
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This stage focused learning from product users in their natural
              settings. I used a Google Doc to record points of interest on my
              smartphone and (when accessible) laptop, and used my smartphone to
              take pictures; very helpful, as I timestamped each entry (over +10
              entries for each observation were pre-loaded into the Google Doc
              the night before). Each photo taken also had a timestamp. This
              helped in transferring my notes and photos into a
              chronological-view in Miro showing the entire day with the product
              user. I then transferred those insights into opportunities to
              purse; within a theme and analysis layout pattern, with
              photographs capturing the product user enduring potential
              opportunities (e.g. not being able to sign for equipment
              electronically due a misunderstanding of key supporting features).
              Both an executive summary and more detailed view were created. The
              executive summary view as used to brief XD Leadership on what was
              learned. The detailed view was used to communicate with UX Design
              and Product.
            </p>
          </div>

          <div className="">
            <CustomSlider images={ContextualInquiryData} />
          </div>
        </div>

        {/* item 3 */}
        <div className="lg:flex justify-between mt-[120px]" id="JourneyMapping">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Prioritization Workshop
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This stage focused on taking discovered opportunities and ranking
              them to generate a priority. The opportunities contained solutions
              spanning user experience and operations. After aligning with on
              prioritization with Product, XD leadership was provided a summary
              of the priorization to begin designing the highest, product-relaed
              opportunities for the next-generation product
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={PrioritizationWorkshopData} />
          </div>
        </div>
      </div>

      {/*  content 2 here */}
      <div
        className="bg-white pt-[170px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4"
        id="SupportedResearch"
      >
        <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Supported Research
        </h1>

        {/* item 1 */}
        <div className="lg:flex justify-between mt-[120px]">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Supported Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Journey Map
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This stage focused on working with XD to turn additional
              observations into a journey map. My role was serving a SME in
              refining language, clarifying points and answering open questions
              to finalize the document
            </p>
          </div>

          <div className="">
            <CustomSlider images={JourneyMapData} />
          </div>
        </div>

        {/* item 2 */}
        <div className="lg:flex justify-between mt-[120px]">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Supported Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Current State + Future State Narratives
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This stage focused on XD turning collected details from the
              observational research into a simply day-in-the-life narrative
              form. This documented pain points in the current experience, The
              documentation also included a future state day-in-the-life with
              product-led solutions integrated. My role was adding and refining
              language, along with answering open questions to finalize the
              document
            </p>
          </div>

          <div className="">
            <CustomSlider images={CurrentStateFutureStateNarrativesData} />
          </div>
        </div>

        {/* item 3 */}
        <div className="lg:flex justify-between mt-[120px]">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Supported Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Personas
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Helped XD with summarizing findings and opportunities into one
              asset, discussing insights discovered by the type of task being
              done by the product user
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={PersonasData} />
          </div>
        </div>

        {/* item 4 */}
        <div className="lg:flex justify-between mt-[120px]">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Supported Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              UMUX-Lite Benchmarking (Pre-Release)
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Served as a reviewer in establishing a baseline metric of the
              product users satisfaction with the existing product
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={UMUXLiteBenchmarkingPreReleaseData} />
          </div>
        </div>
      </div>

      {/*  content 3 here */}

      <div
        className="bg-white pt-[170px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4"
        id="ProposedResearch"
      >
        <h1 className="text-[#2B2B2B] text-[32px] font-Playfair font-semibold leading-[44px] text-center border-b pb-3">
          Proposed Future Research
        </h1>

        {/* item 1 */}
        <div className="lg:flex justify-between mt-[48px]" id="ConceptTesting">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Proposed Future Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Concept + Usability Testing
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This Collecting feedback on the MVP’s conceptual designs
              Collecting feedback on the MVP ease of completing tasks
            </p>
          </div>

          <div className="">
            <CustomSlider images={ConceptUsabilityTestingData} />
          </div>
        </div>

        {/* item 2  */}
        <div className="lg:flex justify-between mt-[110px]" id="Post-release">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Proposed Future Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
            UMUX-Lite Benchmarking (Post-Release)

            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
            Once features from MVP begin entering product, benchmark satisfaction of product at specific intervals 

            </p>
          </div>

          <div className=" ">
            <CustomSlider images={UMUXLiteBenchmarkingPostReleaseData} />
          </div>
        </div>

      

      </div>
    </div>
  );
};

export default SectionCardOne;
