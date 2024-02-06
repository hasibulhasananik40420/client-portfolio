import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineMinus } from "react-icons/ai";

import AssumptionMappingImage1 from "../../assets/driving-app/Assumption Mapping/image1.png"


import ContextualInquiryImage1 from "../../assets/driving-app/Contextual Inquiry/01.png"
import ContextualInquiryImage2 from "../../assets/driving-app/Contextual Inquiry/02 (1).png"
import ContextualInquiryImage3 from "../../assets/driving-app/Contextual Inquiry/03 (1).png"
import ContextualInquiryImage4 from "../../assets/driving-app/Contextual Inquiry/04 (1).png"



import PrioritizationWorkshopImage1 from "../../assets/driving-app/Learnings Prioritization/image.png"
import PrioritizationWorkshopImage2 from "../../assets/driving-app/Learnings Prioritization/image (1).png"
import PrioritizationWorkshopImage3 from "../../assets/driving-app/Learnings Prioritization/05.png"


import CurrentDayNarrativesSupportedImage1 from "../../assets/driving-app/Current Day Narratives (Supported)/Screenshot 2023-11-27 at 6.56.05 PM (1).png"
import CurrentDayNarrativesSupportedImage2 from "../../assets/driving-app/Current Day Narratives (Supported)/01.png"




import JourneyMapImage1 from "../../assets/driving-app/Journey Maps (Supported)/image.png";
import JourneyMapImage2 from "../../assets/driving-app/Journey Maps (Supported)/image (1).png";
import JourneyMapImage3 from "../../assets/driving-app/Journey Maps (Supported)/image (2).png";



import PersonasImage1 from "../../assets/driving-app/Personas (Supported)/image.png";

import BenchmarkingImage1 from "../../assets/driving-app/Benchmarking (Supported)/01.png"


import CustomSliderVTwo from "../Slider/CustomSliderVTwo";
import { useState } from "react";

const FaqSlider = () => {


      const faqData = [
        
        {
          id: 1,
          text: 'Assumption Mapping',
          images: [
            { id: 1, image: AssumptionMappingImage1, text: "Assumption Mapping: Workshop Board" },
           
          ],
        }, 
        {
          id: 2,
          text: 'Contextual Inquiry',
          images: [
            { id: 1, image: ContextualInquiryImage1, text: "Contextual Inquiry: Research Plan" },
            { id: 2, image: ContextualInquiryImage2, text: "Contextual Inquiry: Note Taking Guide (Google Doc)" },
            { id: 3, image: ContextualInquiryImage3, text: "Contextual Inquiry: Synthesis for Analysis & Alinment with Design" },
            { id: 4, image: ContextualInquiryImage4, text: "Contextual Inquiry: Readout Report for Executive Team" },
            
          ],
        },
        {
          id: 3,
          text: 'Learnings Prioritization',
          images: [
            { id: 1, image: PrioritizationWorkshopImage3, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 2, image: PrioritizationWorkshopImage2, text: "Learnings Prioritization: Prioritization Matrix" },
            { id: 3, image: PrioritizationWorkshopImage1, text: "Learnings Prioritization: Prioritization Readout for Executive Team" },
           
          ],
        },
        {
          id: 4,
          text: ' Current Day Narratives (Supported)',
          images: [
            { id: 1, image: CurrentDayNarrativesSupportedImage1, text: "Day-in-the-Life Narratives: Current State" },
            { id: 2, image: CurrentDayNarrativesSupportedImage2, text: "Day-in-the-Life Narratives: Future State" },
            // ... add more images as needed
          ],
        },
        {
          id: 5,
          text: 'Journey Maps (Supported)',
          images: [
            { id: 1, image: JourneyMapImage1, text: "Journey Map: Milestones" },
            { id: 2, image: JourneyMapImage2, text: "Journey Map: Sentiment & Tools Used" },
            { id: 3, image: JourneyMapImage3, text: "Journey Map: Painpoints & Areas of Opportunities" },
          ],
        },
        {
          id: 6,
          text: 'Personas (Supported)',
          images: [
            { id: 1, image: PersonasImage1, text: "Persona :Driver" },
           
            // ... add more images as needed
          ],
        },
        {
          id: 7,
          text: 'Benchmarking (Supported)',
          images: [
            { id: 1, image: BenchmarkingImage1, text: "Benchmarking: UMUX-Lite for Current Experience" },
            
            // ... add more images as needed
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
            {section.images.length > 1 && ( // Only render slider if there is more than 1 image
              <CustomSliderVTwo images={section.images} />
            )}
            {section.images.length === 1 && ( // Render single image without slider
              <div className="h-[416px] w-full p-4 border-[1px] border-[#D9D9D9] lg:w-[1000px] mt-3">
                <img
                  className="object-contain w-full h-full"
                  src={section.images[0].image}
                  alt=""
                />
              </div>
            )}
          </div>
        )}
      </div>
    ))}
  </div>


  )
}

export default FaqSlider