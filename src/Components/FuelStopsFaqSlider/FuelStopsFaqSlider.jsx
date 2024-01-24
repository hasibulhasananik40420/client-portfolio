import { CiSquarePlus } from "react-icons/ci"
import CustomSliderVTwo from "../Slider/CustomSliderVTwo"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";


import DeskResearchImage1 from "../../assets/Placeholder.png"

import SemiStructuredInterviewsImage1 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/01.png"
import SemiStructuredInterviewsImage2 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/04 (1).png"
import SemiStructuredInterviewsImage3 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/Screenshot 2023-10-25 at 10.06.05 AM.png"
import SemiStructuredInterviewsImage4 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/Screenshot 2023-10-25 at 10.06.17 AM.png"
import SemiStructuredInterviewsImage5 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/Screenshot 2023-10-25 at 10.06.28 AM.png"



import ExperienceMappingImage1 from "../../assets/Suggested-fuel-Stops/Experience Mapping/02 (1).png"
import ExperienceMappingImage2 from "../../assets/Suggested-fuel-Stops/Experience Mapping/image.png"








const FuelStopsFaqSlider = () => {


    const faqData = [
        
        {
          id: 1,
          text: 'Desk Research',
          images: [
            { id: 1, image: DeskResearchImage1, text: "Caption Text 1" },
           
            // ... add more images as needed
          ],
        }, 
        {
          id: 2,
          text: 'Semi-structured Interviews',
          images: [
            { id: 1, image: SemiStructuredInterviewsImage1, text: "Caption Text 1" },
            { id: 2, image: SemiStructuredInterviewsImage2, text: "Caption Text 2" },
            { id: 3, image: SemiStructuredInterviewsImage3, text: "Caption Text 3" },
            { id: 4, image: SemiStructuredInterviewsImage4, text: "Caption Text 3" },
            { id: 5, image: SemiStructuredInterviewsImage5, text: "Caption Text 3" },
          ],
        },
        {
          id: 3,
          text: 'Experience Mapping',
          images: [
            { id: 1, image: ExperienceMappingImage1, text: "Caption Text 1" },
            { id: 2, image: ExperienceMappingImage2, text: "Caption Text 2" },
           
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

export default FuelStopsFaqSlider