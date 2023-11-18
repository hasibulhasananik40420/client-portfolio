import { GoArrowRight } from "react-icons/go";
import { PiArrowBendLeftDownLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import SliderOne from "../Slider/SliderOne";
import SliderTwo from "../Slider/SliderTwo";
import SliderThree from "../Slider/SliderThree";
import SliderFour from "../Slider/SliderFour";
import { useEffect, useState } from "react";

const SectionCard = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeButton, setActiveButton] = useState("button1");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const button1Threshold = 0;
      const button2Threshold = 3250; // Adjust this value based on your specific requirements
      const button3Threshold = 4000; // Adjust this value based on your specific requirements

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
        setActiveButton(""); // You may want to set this to the default active button
      }

      const scrollThreshold = 1650; // Adjust this value based on your specific requirements

      setIsSticky(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




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
      <div className="bg-[#FBF7FF] ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-containerX mx-auto px-4 md:px-8 lg:px-4 py-[70px]">
          {/* card1 */}
          <div className="w-[424px] bg-white border-[1px] border-[#28163B] rounded-[4px] p-6">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
              Owned Research
            </h1>
            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur. Malesuada porttitor vitae
              sit et aliquam purus velit sed. Scelerisque at eu ac lacus.Lorem
              ipsum dolor sit amet consectetur. Malesuada porttitor vitae sit et
              aliquam purus velit sed. Scelerisque at eu ac lacus{" "}
            </p>

            <span className="flex items-center gap-3 mt-4">
              <Link to='#OwnedResearch' onClick={handleClick}
                className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4"
                
              >
                Learn More
              </Link>
              <GoArrowRight className="text-black" />
            </span>
          </div>

          {/* card2 */}
          <div className="w-[424px] bg-white border-[1px] border-[#28163B] rounded-[4px] p-6">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
            Supported Research
            </h1>
            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur. Malesuada porttitor vitae
              sit et aliquam purus velit sed. Scelerisque at eu ac lacus.Lorem
              ipsum dolor sit amet consectetur. Malesuada porttitor vitae sit et
              aliquam purus velit sed. Scelerisque at eu ac lacus{" "}
            </p>

            <span className="flex items-center gap-3 mt-4">
              <Link to='#SupportedResearch' onClick={handleClick}
                className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4"
           
              >
                Learn More
              </Link>
              <GoArrowRight className="text-black" />
            </span>
          </div>

          {/* card3 */}
          <div className="w-[424px] bg-white border-[1px] border-[#28163B] rounded-[4px] p-6">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
            Proposed Future Research
            </h1>
            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-6 mt-4">
              Lorem ipsum dolor sit amet consectetur. Malesuada porttitor vitae
              sit et aliquam purus velit sed. Scelerisque at eu ac lacus.Lorem
              ipsum dolor sit amet consectetur. Malesuada porttitor vitae sit et
              aliquam purus velit sed. Scelerisque at eu ac lacus{" "}
            </p>

            <span className="flex items-center gap-3 mt-4">
              <Link to='#ProposedResearch' onClick={handleClick}
                className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-4"
               
              >
                Learn More
              </Link>
              <GoArrowRight className="text-black" />
            </span>
          </div>
        </div>

        {/* 3 item card here */}

        <div
          className={`py-10 ${
            isSticky
              ? "visible fixed top-0 w-full bg-[#FBF7FF]"
              : "hidden"
          } z-50`}
        >
          <div
            className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-containerX mx-auto px-4 md:px-8 lg:px-4`}
          >
            {/* number 1 */}

            <Link to="#OwnedResearch" onClick={handleClick}
              className={`border-[1px] rounded-sm px-6 flex items-center justify-between h-[100px] cursor-pointer nav-link ${
                activeButton === "button1" ? "bg-[#28163B] text-white" : ""
              }`}
              
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p
                className={`text-[16px] text-[${
                  activeButton === "button1" ? "#FFFFFF" : "#2B2B2B"
                }] font-semibold font-Montserrat leading-6`}
              >
                2. Supported Research
              </p>
              {activeButton === "button1" && (
                <PiArrowBendLeftDownLight className="text-white" />
              )}
            </Link>

            {/* number 2 */}

            <Link  to="#SupportedResearch" onClick={handleClick}
              className={`border-[1px] rounded-sm px-6 flex items-center justify-between h-[100px] cursor-pointer nav-link ${
                activeButton === "button2" ? "bg-[#28163B] text-white" : ""
              }`}
             
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p
                className={`text-[16px] text-[${
                  activeButton === "button2" ? "#FFFFFF" : "#2B2B2B"
                }] font-semibold font-Montserrat leading-6`}
              >
                2. Supported Research
              </p>
              {activeButton === "button2" && (
                <PiArrowBendLeftDownLight className="text-white" />
              )}
            </Link>

            {/* number 3*/}

            <Link  to="#ProposedResearch" onClick={handleClick}
              className={`border-[1px] rounded-sm px-6 flex items-center justify-between h-[100px] cursor-pointer nav-link ${
                activeButton === "button3" ? "bg-[#28163B] text-white" : ""
              }`}
             
              style={{ borderRadius: "4px 4px 0px 0px" }}
            >
              <p
                className={`text-[16px] text-[${
                  activeButton === "button3" ? "#FFFFFF" : "#2B2B2B"
                }] font-semibold font-Montserrat leading-6`}
              >
                2. Proposed Research
              </p>
              {activeButton === "button3" && (
                <PiArrowBendLeftDownLight className="text-white" />
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* all content here */}

      {/*  content 1 here */}

      <div  className={` bg-white mt-[270px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4`} id="OwnedResearch">
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

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderOne />
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

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderTwo />
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

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderThree />
          </div>
        </div>
      </div>

      {/*  content 2 here */}
      <div
        className="bg-white mt-[270px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4"
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

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderFour />
          </div>
        </div>
      </div>

      {/*  content 3 here */}
      <div className="bg-white mt-[270px] max-w-containerX mx-auto px-4 md:px-8 lg:px-4" id="ProposedResearch">
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

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderOne />
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

          <div className="lg:w-[560px] w-full  h-[388px] ">
            <SliderOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
