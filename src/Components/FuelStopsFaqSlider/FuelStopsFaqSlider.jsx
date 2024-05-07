import { CiSquarePlus } from "react-icons/ci"
import CustomSliderVTwo from "../Slider/CustomSliderVTwo"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";



import SemiStructuredInterviewsImage1 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/01.png"
import SemiStructuredInterviewsImage2 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/Screenshot 2024-01-24 6.10.00 PM.png"
import SemiStructuredInterviewsImage3 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/04 (1).png"

 import SemiStructuredInterviewsImage4 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/-_semi-structured_interviews__fourth_image_.png"

import SemiStructuredInterviewsImage5 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/Semi-structured Interviews (Fifth Image).png"
import SemiStructuredInterviewsImage6 from "../../assets/Suggested-fuel-Stops/Semi-structured Interviews/Screenshot 2023-10-25 at 10.06.28 AM.png"



import ExperienceMappingImage1 from "../../assets/Suggested-fuel-Stops/Experience Mapping/02 (1).png"
import ExperienceMappingImage2 from "../../assets/Suggested-fuel-Stops/Experience Mapping/Screenshot 2024-01-24 6.20.12 PM.png"
import ExperienceMappingImage3 from "../../assets/Suggested-fuel-Stops/Experience Mapping/image.png"








const FuelStopsFaqSlider = () => {


    const faqData = [
        
        
        {
          id: 1,
          text: 'Semi-structured Interviews',
          images: [
            { id: 1, image: SemiStructuredInterviewsImage1, text: "Semi-structured Interviews: Research Plan" },
            { id: 2, image: SemiStructuredInterviewsImage2, text: "Semi-structured Interviews: Desk/Past Research to Inform Questions" },
            { id: 3, image: SemiStructuredInterviewsImage3, text: "Semi-structured Interviews: Interview Guide" },
            { id: 4, image: SemiStructuredInterviewsImage4, text: "Semi-structured Interviews: Report Readout (1 of 3)" },
            { id: 5, image: SemiStructuredInterviewsImage5, text: "Semi-structured Interviews: Report Readout (2 of 3)" },
            { id: 6, image: SemiStructuredInterviewsImage6, text: "Semi-structured Interviews: Report Readout (3 of 3)" },
          ],
        },
        {
          id: 2,
          text: 'Journey Mapping',
          images: [
            { id: 1, image: ExperienceMappingImage1, text: "Journey Mapping: Research Plan" },
            { id: 2, image: ExperienceMappingImage2, text: "Journey Mapping: Working File to Pinpoint Entry Points for Feature(1 of 2)" },
            { id: 3, image: ExperienceMappingImage3, text: "Journey Mapping: Working File to Pinpoint Entry Points for Feature(2 of 2)" },
           
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
            {section.images.length > 1 && ( // Only render slider if there is more than 1 image
              <CustomSliderVTwo images={section.images} />
            )}
            {section.images.length === 1 && ( // Render single image without slider
              <div className="h-[416px] w-full p-4 border-[1px] border-[#D9D9D9] lg:w-[800px] xl:w-[800px] 2xl:w-[950px] mt-3">
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

export default FuelStopsFaqSlider