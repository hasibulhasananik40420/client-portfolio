import { CiSquarePlus } from "react-icons/ci";

import DiscoveryResearchImage1 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/01.png";
import DiscoveryResearchImage2 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/02.png";
import DiscoveryResearchImage3 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/03.png";
import DiscoveryResearchImage4 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/04.png";
import DiscoveryResearchImage5 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/05.png";
import CustomSliderVTwo from "../Slider/CustomSliderVTwo";
import { useState } from "react";

const FaqSlider = () => {

   


    const DiscoveryResearchData = [
        {
          id: 1,
          image: DiscoveryResearchImage1,
          text: "Caption Text Lorem ipsum dolor sit amet consectetur",
        },
        {
          id: 2,
          image: DiscoveryResearchImage2,
          text: "Caption 2 Text Lorem ipsum dolor sit amet consectetur",
        },
        {
          id: 3,
          image: DiscoveryResearchImage3,
          text: "Caption 3 Text Lorem ipsum dolor sit amet consectetur",
        },
        {
          id: 4,
          image: DiscoveryResearchImage4,
          text: "Caption 4 Text Lorem ipsum dolor sit amet consectetur",
        },
        {
          id: 5,
          image: DiscoveryResearchImage5,
          text: "Caption 5 Text Lorem ipsum dolor sit amet consectetur",
        },
        
      ];

      const faqData = [
        {
          id: 1,
          text: 'Contextual Inquiry',
        },
        {
          id: 2,
          text: 'Workshop Facilitation (Learnings Prioritization)',
        },
        {
          id: 3,
          text: 'Current Day Narratives',
        },
        {
          id: 4,
          text: 'Journey Maps',
        },
        {
          id: 5,
          text: 'Personas',
        },
        {
          id: 6,
          text: 'Benchmarking (Existing State)',
        },
      ];


      const initialSectionsState = Array(faqData.length).fill(false);
      initialSectionsState[0] = true; // Initial state: 1st FAQ is open, others are closed
    
      const [openSections, setOpenSections] = useState(initialSectionsState);
    
      const toggleSection = (index) => {
        const newOpenSections = Array(faqData.length).fill(false);
        newOpenSections[index] = true;
        setOpenSections(newOpenSections);
      };
  return (
    // <div className="mt-[70px]">

    //          <div>
    //           <CustomSliderVTwo images={DiscoveryResearchData} />
    //          </div>

    //           <div className="flex gap-3 mt-20">
    //           <CiSquarePlus  className="text-[30px] cursor-pointer"/>

    //              <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">Contextual Inquiry</h3>
    //           </div>

    //            <div className="flex gap-3 mt-4">
    //           <CiSquarePlus  className="text-[30px] cursor-pointer"/>
    //              <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">Workshop Facilational (Learnings Prioritization)</h3>
    //           </div>

    //            <div className="flex gap-3 mt-4">
    //           <CiSquarePlus  className="text-[30px] cursor-pointer"/>
    //              <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">Current Day Narratives</h3>
    //           </div>

    //            <div className="flex gap-3 mt-4">
    //           <CiSquarePlus  className="text-[30px] cursor-pointer"/>
    //              <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">Journey Maps</h3>
    //           </div>

    //            <div className="flex gap-3 mt-4">
    //           <CiSquarePlus  className="text-[30px] cursor-pointer"/>
    //              <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">Personas</h3>
    //           </div>

    //            <div className="flex gap-3 mt-4">
    //           <CiSquarePlus  className="text-[30px] cursor-pointer"/>
    //              <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">Benchmarking (Existing State)</h3>
    //           </div>

              

    //        </div>


    <div className="">
    {faqData.map((section, index) => (
      <div key={section.id}>
        <div className="flex gap-3 mt-20" onClick={() => toggleSection(index)}>
          <CiSquarePlus
            className={`text-[30px] cursor-pointer ${
              openSections[index] ? 'open' : ''
            }`}
          />
          <h3 className="text-black text-[18px] font-Montserrat leading-7 font-normal">
            {section.text}
          </h3>
        </div>

        {openSections[index] && (
          <div className="mt-4">
            <CustomSliderVTwo
              images={DiscoveryResearchData}
            />
          </div>
        )}
      </div>
    ))}
  </div>
  )
}

export default FaqSlider