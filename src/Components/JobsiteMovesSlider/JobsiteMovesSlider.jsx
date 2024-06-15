import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineMinus } from "react-icons/ai";
//add image
import AssumptionMappingImage1 from "../../assets/driving-app/Assumption Mapping/image1.png"


import ContextualInquiryImage1 from "../../assets/driving-app/Contextual Inquiry/01.png"
import ContextualInquiryImage2 from "../../assets/driving-app/Contextual Inquiry/02 (1).png"
import ContextualInquiryImage3 from "../../assets/driving-app/Contextual Inquiry/03 (1).png"
import ContextualInquiryImage4 from "../../assets/driving-app/Contextual Inquiry/04 (1).png"



import PrioritizationWorkshopImage1 from "../../assets/driving-app/Learnings Prioritization/image.png"
import PrioritizationWorkshopImage2 from "../../assets/driving-app/Learnings Prioritization/image (1).png"
import PrioritizationWorkshopImage3 from "../../assets/driving-app/Learnings Prioritization/05.png"



import CustomSliderVTwo from "../Slider/CustomSliderVTwo";
import { useState } from "react";

const JobsiteMovesSlider = () => {


      const faqData = [
        
        {
          id: 1,
          text: 'Research Plan',
          images: [
            { id: 1, image: AssumptionMappingImage1, text: "Assumption Mapping: Workshop Board" },
           
          ],
        }, 
        {
          id: 2,
          text: 'Process Mapping: Service Design Blueprints',
          images: [
            { id: 1, image: ContextualInquiryImage1, text: "Contextual Inquiry: Research Plan" },
            { id: 2, image: ContextualInquiryImage2, text: "Contextual Inquiry: Note Taking Guide (Google Doc)" },
            { id: 3, image: ContextualInquiryImage3, text: "Contextual Inquiry: Synthesis for Analysis & Alinment with Design" },
            { id: 4, image: ContextualInquiryImage4, text: "Contextual Inquiry: Readout Report for Executive Team" },
            
          ],
        },
        {
          id: 3,
          text: 'Executive Presentation',
          images: [
            { id: 1, image: PrioritizationWorkshopImage3, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 2, image: PrioritizationWorkshopImage2, text: "Learnings Prioritization: Prioritization Matrix" },
            { id: 3, image: PrioritizationWorkshopImage1, text: "Learnings Prioritization: Prioritization Readout for Executive Team" },
           
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
   
   

     
    <div className="flex flex-col gap-[10px]">
    {faqData.map((section, index) => (
      <div key={section.id}>
        <div className="flex gap-2" onClick={() => toggleSection(index)}>
          {openSections[index] ? (
            <AiOutlineMinus className="md:text-[30px] text-[25px] cursor-pointer" />
          ) : (
            <CiSquarePlus className="md:text-[30px] text-[25px] cursor-pointer" />
          )}
          <h3 className="text-[#2B2B2B] md:text-[16px] text-[14px] font-Montserrat md:leading-8 leading-6 font-medium">
            {section.text}
          </h3>
        </div>

        {openSections[index] && (
          <div className="">
              <CustomSliderVTwo images={section.images} />
           
          </div>
        )}
      </div>
    ))}
  </div>


  )
}

export default JobsiteMovesSlider