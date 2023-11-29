import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import arrow from "../../assets/arrow.svg";
import CustomSlider from "../Slider/CustomSlider";
import ResearchCardTwo from "../ResearchCard/ResearchCardTwo";

import ExperienceMappingImage1 from "../../assets/Owned Research/1.Experience Mapping/001.png";
import ExperienceMappingImage2 from "../../assets/Owned Research/1.Experience Mapping/002.png";
import ExperienceMappingImage3 from "../../assets/Owned Research/1.Experience Mapping/003.png";
import ExperienceMappingImage4 from "../../assets/Owned Research/1.Experience Mapping/004.png";
import ExperienceMappingImage5 from "../../assets/Owned Research/1.Experience Mapping/005.png";
import ExperienceMappingImage6 from "../../assets/Owned Research/1.Experience Mapping/006.png";
import ExperienceMappingImage7 from "../../assets/Owned Research/1.Experience Mapping/007.png";
import ExperienceMappingImage8 from "../../assets/Owned Research/1.Experience Mapping/008.png";
import ExperienceMappingImage9 from "../../assets/Owned Research/1.Experience Mapping/009.png";
import ExperienceMappingImage10 from "../../assets/Owned Research/1.Experience Mapping/010.png";

import DayInTheLifePanelImage1 from '../../assets/Owned Research/2.Day-in-the-life Panel/Screenshot 2023-11-27 at 7.12.38 PM (1).png'

import ConceptTestingImage1 from "../../assets/Owned Research/3.Concept Testing/001.png";
import ConceptTestingImage2 from "../../assets/Owned Research/3.Concept Testing/002.png";
import ConceptTestingImage3 from "../../assets/Owned Research/3.Concept Testing/003.png";
import ConceptTestingImage4 from "../../assets/Owned Research/3.Concept Testing/004.png";
import ConceptTestingImage5 from "../../assets/Owned Research/3.Concept Testing/005.png";
import ConceptTestingImage6 from "../../assets/Owned Research/3.Concept Testing/006.png";

import TrainingSurveysImage1 from "../../assets/Owned Research/5.Training Surveys/001.png";
import TrainingSurveysImage2 from "../../assets/Owned Research/5.Training Surveys/002.png";

import BenchmarkingImage1 from "../../assets/Owned Research/6.UMUX-Lite Benchmarking (2 weeks of usage)/000.png";
import BenchmarkingImage2 from "../../assets/Owned Research/6.UMUX-Lite Benchmarking (2 weeks of usage)/001.png";
import BenchmarkingImage3 from "../../assets/Owned Research/6.UMUX-Lite Benchmarking (2 weeks of usage)/002.png";
import BenchmarkingImage4 from "../../assets/Owned Research/6.UMUX-Lite Benchmarking (2 weeks of usage)/003.png";

import FutureStateNarrativeImage1 from "../../assets/Supported Research/2.Future State Narrative/001.png";

import UMUXLiteBenchmarkingImage1 from "../../assets/Supported Research/3.UMUX-Lite Benchmarking (pre-release)/001.png";
import UMUXLiteBenchmarkingImage2 from "../../assets/Supported Research/3.UMUX-Lite Benchmarking (pre-release)/002.png";

import AdoptionImage1 from "../../assets/Proposed Future Research/1.Adoption _ Retention Benchmarking/image.png";

import ConceptCarTestingImage1 from '../../assets/Placeholder.png'

import KanoModelImage1 from '../../assets/Placeholder.png'





const SectionCardTwo = () => {
  // part 1

  // number 1
  const images = [
    {
      id: 1,
      image: ExperienceMappingImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: ExperienceMappingImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image: ExperienceMappingImage3,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image: ExperienceMappingImage4,
      text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 5,
      image: ExperienceMappingImage5,
      text: "Caption 5 Text Lorem ipsum dolor sit amet consectetur",
    },{
      
      id: 6,
      image: ExperienceMappingImage6,
      text: "Caption 6 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 7,
      image: ExperienceMappingImage7,
      text: "Caption 7 Text Lorem ipsum dolor sit amet consectetur",
    },{
      id: 8,
      image: ExperienceMappingImage8,
      text: "Caption 8 Text Lorem ipsum dolor sit amet consectetur",
    },{
      id: 9,
      image: ExperienceMappingImage9,
      text: "Caption 8 Text Lorem ipsum dolor sit amet consectetur",
    },{
      id: 10,
      image: ExperienceMappingImage10,
      text: "Caption 8 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  // number 2
  const DayInTheLifePanelData = [
    {
      id: 1,
      image:DayInTheLifePanelImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
  
  ];

  // number 3
  const ConceptTestingData = [
    {
      id: 1,
      image: ConceptTestingImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: ConceptTestingImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image: ConceptTestingImage3,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image: ConceptTestingImage4,
      text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
    }, {
      id: 5,
      image: ConceptTestingImage5,
      text: "Caption 5 Text Lorem ipsum dolor sit amet consectetur",
    }, {
      id: 6,
      image: ConceptTestingImage6,
      text: "Caption 6 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  // number 4
  const UnmoderatedUsabilityTestingBenchmarkingData = [
    {
      id: 1,
      image:
      KanoModelImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
   
  ];

  // number 5
  const TrainingSurveysData = [
    {
      id: 1,
      image: TrainingSurveysImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: TrainingSurveysImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
   
  ];

  // number 6
  const UMUXLiteBenchmarking2WeeksofUsage = [
    {
      id: 1,
      image: BenchmarkingImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: BenchmarkingImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 3,
      image: BenchmarkingImage3,
      text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 4,
      image: BenchmarkingImage4,
      text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
    },
  ];

  // number 7
  // const TestingBenchmarkingData = [
  //   {
  //     id: 1,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption Text Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];

  //  part 2

  // const CurrentStateNarrativesData = [
  //   {
  //     id: 1,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption Text Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbeQlsruJMdFTjMK9OkGZY527BXOvbGDWWHg&usqp=CAU",
  //     text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];

  const FutureStateNarrativeData = [
    {
      id: 1,
      image: FutureStateNarrativeImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    
  ];

  const UMUXLiteBenchmarkingData = [
    {
      id: 1,
      image: UMUXLiteBenchmarkingImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    {
      id: 2,
      image: UMUXLiteBenchmarkingImage2,
      text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
    },
    
  ];

  //part 3

  const AdoptionData = [
    {
      id: 1,
      image: AdoptionImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    
  ];

  const ConceptCarTestingData = [
    {
      id: 1,
      image:ConceptCarTestingImage1,
        
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
    },
    
  ];

  const KanoModelData = [
    {
      id: 1,
      image:
      KanoModelImage1,
      text: "Caption Text Lorem ipsum dolor sit amet consectetur",
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
      let button2Threshold = 4950;
      let button3Threshold = 6700;

      // Mobile device threshold values
      if (isMobile) {
        button1Threshold = 2900;
        button2Threshold = 9500;
        button3Threshold = 12100;
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
  //     const button2Threshold = 4950; // Adjust this value based on your specific requirements
  //     const button3Threshold = 6700; // Adjust this value based on your specific requirements

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
  //     // top side
  //     // const scrollThreshold = 1650; // Adjust this value based on your specific requirements

  //     //  bottom side
  //     const scrollThreshold = 1200; // Adjust this value based on your specific requirements

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
          <ResearchCardTwo />
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
                // <PiArrowBendLeftDownLight className="text-white" />
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
              Experience Mapping
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research focused on understanding how the target user base
              completed regularly daily tasks to determine whether the existing
              product roadmap addressed previously known and documented pain
              points. The research’s findings helped reinforce the urgency of
              one feature in the product roadmap, pulling it up into the next
              sizeable feature being released into the product.
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={images} />
          </div>
        </div>

        {/* item 2 */}
        <div
          className="lg:flex justify-between mt-[120px]"
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
              Day-in-the-life Panel
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
            These research provided our teammates with a greater shared
              understanding on how the target user base completed regularly
              daily tasks, while also provided a forum for them to ask
              questions.
            </p>
          </div>

          <div className="">
            <CustomSlider images={DayInTheLifePanelData} />
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
              Concept Testing
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research tested the new product with participants in our
              target user base. This findings helped inform what additional
              features should be added, along with providing insights to the
              trainings teams on unclear concepts and opportunities to support
              the launch of the new product
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={ConceptTestingData} />
          </div>
        </div>

        {/* item 4 */}
        <div className="lg:flex justify-between mt-[120px]" id="JourneyMapping">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Unmoderated Usability Testing Benchmarking
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research research helped test a live version of new the
              product. Since the new product was rolling out in markets in small
              pilot groups, this testing helped provide Product Management understand how our non-pilot users, who would have less support
              than our pilot users, may experience the new product
            </p>
          </div>

          <div className=" ">
            <CustomSlider
              images={UnmoderatedUsabilityTestingBenchmarkingData}
            />
          </div>
        </div>

        {/* item 5 */}
        <div className="lg:flex justify-between mt-[120px]" id="JourneyMapping">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Training Surveys
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research helped provided training will feedback, after going
              through training, on how confident our target user group felt
              using the new changes and the overall learning objectives. Since
              the
            </p>
          </div>

          <div className="">
            <CustomSlider images={TrainingSurveysData} />
          </div>
        </div>

        {/* item 6 */}
        <div className="lg:flex justify-between mt-[120px]" id="JourneyMapping">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
            UMUX-Lite Benchmarking (Post-release)
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research helped benchmark satisfaction with new the product,
              before moving into additional pilot groups, with also providing
              sentiment analysis on why participants reported such satisfaction
              sources
            </p>
          </div>

          <div className="">
            <CustomSlider images={UMUXLiteBenchmarking2WeeksofUsage} />
          </div>
        </div>

        {/* item 7 */}
        {/* <div className="lg:flex justify-between mt-[120px]" id="JourneyMapping">
          <div className="lg:w-[560px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Owned Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              UMUX-Lite Benchmarking (8-weeks of usage)
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research helped benchmark satisfaction with new the product,
              before moving into additional pilot groups, with also providing
              sentiment analysis on why participants reported such satisfaction
              sources
            </p>
          </div>

          <div className="">
            <CustomSlider images={TestingBenchmarkingData} />
          </div>
        </div> */}
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
        {/* <div className="lg:flex justify-between mt-[120px]">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Supported Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Current State Narratives
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research contributed to a shared understanding of target user
              base completed regularly daily tasks. My role was simply a
              reviewer.
            </p>
          </div>

          <div className="">
            <CustomSlider images={CurrentStateNarrativesData} />
          </div>
        </div> */}


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
              UMUX-Lite Benchmarking (pre-release)
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research helped benchmark the target user base’s satisfaction
              with their existing product, to compare against the new product
              being introduced. The sentiment responses also spotlighted pain
              points to monitor for when the new product was released. My role
              was a reviewer, specifically in the tagging of the sentiment
              analysis
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={UMUXLiteBenchmarkingData} />
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
            Current & Future State Narratives
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research helped to articulate how planned upgrades to the new
              product would fit into the target user base’s regular daily tasks.
              My role was to review the material and spotlight where the planned
              upgrades did not contain solutions addressing pain points
              collected during Experience Mapping research.
            </p>
          </div>

          <div className="">
            <CustomSlider images={FutureStateNarrativeData} />
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
              Adoption & Retention Benchmarking
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research would measure how often key features were being used
              in the new product over a period of time. This insights would
              provide help provide additional context into user satisfaction
              scores (i.e., after 2 weeks of usage) for the new product
            </p>
          </div>

          <div className="">
            <CustomSlider images={AdoptionData} />
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
              Concept Car Testing
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research would begin collecting feedback on the future state
              version of the new product. This product contained features not
              slated for development, but were vetted for technical feasibility
              and are reaching a prototype state. These features represent
              business aspirations that would need to be aligned with target
              user feedback to be molded into a realistic/viable solution.
            </p>
          </div>

          <div className=" ">
            <CustomSlider images={ConceptCarTestingData} />
          </div>
        </div>

        {/* item 3  */}
        <div className="lg:flex justify-between mt-[110px]" id="Post-release">
          <div className="lg:w-[620px] w-full">
            <span className="flex items-center gap-2">
              <p className="w-[24px] h-[1px] bg-[#2B2B2B]"></p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat leading-6 font-normal">
                Proposed Future Research
              </p>
            </span>
            <h1 className="text-black text-[32px] font-semibold leading-[44px] font-Playfair">
              Kano Model
            </h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              This research would begin collecting feedback on future state
              version of the new product’s features, and identifying which are
              most likely to satisfy the target user base. This research would
              help our Product teams weigh a high-satisfaction feature against
              its costs to implement to determine whether or not adding it to
              the roadmap is a strategically sound decision
            </p>
          </div>

          <div className="">
            <CustomSlider images={KanoModelData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCardTwo;
