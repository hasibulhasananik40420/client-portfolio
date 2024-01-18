import { useState } from "react";

import DiscoveryResearchImage1 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/01.png";
import DiscoveryResearchImage2 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/02.png";
import DiscoveryResearchImage3 from "../../assets/Suggested-fuel-Stops/Owned Research/2.Discovery Research/03.png";



import ContextualInquiryImage1 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image (1).png";
import ContextualInquiryImage2 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image (2).png";
import ContextualInquiryImage3 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image (3).png";
import ContextualInquiryImage4 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image.png";
import ContextualInquiryImage5 from "../../assets/driving-app/Owned Research/2.Contextual Inquiry/image(5).png";


import PrioritizationWorkshopImage1 from "../../assets/driving-app/Owned Research/3.Prioritization Workshop/image (1).png";
import PrioritizationWorkshopImage2 from "../../assets/driving-app/Owned Research/3.Prioritization Workshop/image.png";
import { AiOutlineMinus } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import CustomSliderVTwo from "../Slider/CustomSliderVTwo";



const DispatchingFaqSlider = () => {

    const faqData = [
        
        {
          id: 1,
          text: 'Experience Mapping',
          images: [
            { id: 1, image: DiscoveryResearchImage1, text: "Caption Text 1" },
            { id: 2, image: DiscoveryResearchImage2, text: "Caption Text 2" },
            { id: 3, image: DiscoveryResearchImage3, text: "Caption Text 3" },
            // ... add more images as needed
          ],
        }, 
        {
          id: 2,
          text: 'Narrative for Day-in-the-Life (Supported)',
          images: [
            { id: 1, image: ContextualInquiryImage1, text: "Caption Text 1" },
            { id: 2, image: ContextualInquiryImage2, text: "Caption Text 2" },
            { id: 3, image: ContextualInquiryImage3, text: "Caption Text 3" },
            { id: 4, image: ContextualInquiryImage4, text: "Caption Text 3" },
            { id: 5, image: ContextualInquiryImage5, text: "Caption Text 3" },
          ],
        },
        {
          id: 3,
          text: 'Panel Discussion for Day-in-the-Life',
          images: [
            { id: 1, image: PrioritizationWorkshopImage1, text: "Caption Text 1" },
            { id: 2, image: PrioritizationWorkshopImage2, text: "Caption Text 2" },
           
          ],
        },

 {
          id: 4,
          text: 'Concept Testing',
          images: [
            { id: 1, image: PrioritizationWorkshopImage1, text: "Caption Text 1" },
            { id: 2, image: PrioritizationWorkshopImage2, text: "Caption Text 2" },
           
          ],
        },

        {
          id: 5,
          text: 'Experience Benchmarking (Supported)',
          images: [
            { id: 1, image: PrioritizationWorkshopImage1, text: "Caption Text 1" },
            { id: 2, image: PrioritizationWorkshopImage2, text: "Caption Text 2" },
           
          ],
        },

         {
          id: 6,
          text: 'Training Benchmarking',
          images: [
            { id: 1, image: PrioritizationWorkshopImage1, text: "Caption Text 1" },
            { id: 2, image: PrioritizationWorkshopImage2, text: "Caption Text 2" },
           
          ],
        },




      
      
      ];


    const initialSectionsState = Array(faqData.length).fill(false);
    const [openSections, setOpenSections] = useState(initialSectionsState);
  
    const toggleSection = (index) => {
      const newOpenSections = openSections.map((isOpen, i) => i === index ? !isOpen : false);
      setOpenSections(newOpenSections);
    };



  return (
    <div className="flex flex-col gap-6">
    {faqData.map((section, index) => (
      <div key={section.id}>
        <div className="flex gap-2" onClick={() => toggleSection(index)}>
          {openSections[index] ? (
            <AiOutlineMinus className="text-[30px] cursor-pointer" />
          ) : (
            <CiSquarePlus className="text-[30px] cursor-pointer" />
          )}
          <h3 className="text-[#2B2B2B] text-[20px] font-Montserrat leading-8 font-medium">
            {section.text}
          </h3>
        </div>

        {openSections[index] && (
          <div className="">
            {/* Pass the image paths to CustomSliderVTwo */}
            <CustomSliderVTwo images={section.images} />
          </div>
        )}
      </div>
    ))}
  </div>
  )
}

export default DispatchingFaqSlider