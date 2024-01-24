import { useState } from "react";

import ExperienceMappingImage1 from "../../assets/Automated Dispatching/Experience Mapping/001.png"
import ExperienceMappingImage2 from "../../assets/Automated Dispatching/Experience Mapping/003.png"
import ExperienceMappingImage3 from "../../assets/Automated Dispatching/Experience Mapping/005.png"
import ExperienceMappingImage4 from "../../assets/Automated Dispatching/Experience Mapping/006.png"
import ExperienceMappingImage5 from "../../assets/Automated Dispatching/Experience Mapping/007.png"
import ExperienceMappingImage6 from "../../assets/Automated Dispatching/Experience Mapping/008.png"
import ExperienceMappingImage7 from "../../assets/Automated Dispatching/Experience Mapping/010.png"


import NarrativeImage1 from "../../assets/Automated Dispatching/Narrative for Day-in-the-Life (Supported)/001.png"


import PanelDiscussionImage1 from "../../assets/Automated Dispatching/Panel Discussion for Day-in-the-Life/Screenshot 2023-11-27 at 7.12.38 PM (1).png"


import ConceptTestingImage1 from "../../assets/Automated Dispatching/Concept Testing/001.png"
import ConceptTestingImage2 from "../../assets/Automated Dispatching/Concept Testing/002.png"
import ConceptTestingImage3 from "../../assets/Automated Dispatching/Concept Testing/003.png"
import ConceptTestingImage4 from "../../assets/Automated Dispatching/Concept Testing/004.png"
import ConceptTestingImage5 from "../../assets/Automated Dispatching/Concept Testing/006.png"


import ExperienceBenchmarkingSupportedImage1 from "../../assets/Automated Dispatching/Experience Benchmarking (Supported)/001.png"
import ExperienceBenchmarkingSupportedImage2 from "../../assets/Automated Dispatching/Experience Benchmarking (Supported)/002.png"

import placeholderImage from '../../assets/Placeholder.png'


import { AiOutlineMinus } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import CustomSliderVTwo from "../Slider/CustomSliderVTwo";



const DispatchingFaqSlider = () => {

    const faqData = [
        
        {
          id: 1,
          text: 'Experience Mapping',
          images: [
            { id: 1, image: ExperienceMappingImage1, text: "Caption Text 1" },
            { id: 2, image: ExperienceMappingImage2, text: "Caption Text 2" },
            { id: 3, image: ExperienceMappingImage3, text: "Caption Text 3" },
            { id: 4, image: ExperienceMappingImage4, text: "Caption Text 3" },
            { id: 5, image: ExperienceMappingImage5, text: "Caption Text 3" },
            { id: 6, image: ExperienceMappingImage6, text: "Caption Text 3" },
            { id: 7, image: ExperienceMappingImage7, text: "Caption Text 3" },
           
           
          ],
        }, 
        {
          id: 2,
          text: 'Narrative for Day-in-the-Life (Supported)',
          images: [
            { id: 1, image: NarrativeImage1, text: "Caption Text 1" },
           
          ],
        },
        {
          id: 3,
          text: 'Panel Discussion for Day-in-the-Life',
          images: [
            { id: 1, image: PanelDiscussionImage1, text: "Caption Text 1" },
           
           
          ],
        },

 {
          id: 4,
          text: 'Concept Testing',
          images: [
            { id: 1, image: ConceptTestingImage1, text: "Caption Text 1" },
            { id: 2, image: ConceptTestingImage2, text: "Caption Text 2" },
            { id: 3, image: ConceptTestingImage3, text: "Caption Text 2" },
            { id: 4, image: ConceptTestingImage4, text: "Caption Text 2" },
            { id: 5, image: ConceptTestingImage5, text: "Caption Text 2" },
           
          ],
        },

        {
          id: 5,
          text: 'Experience Benchmarking (Supported)',
          images: [
            { id: 1, image: ExperienceBenchmarkingSupportedImage1, text: "Caption Text 1" },
            { id: 2, image: ExperienceBenchmarkingSupportedImage2, text: "Caption Text 2" },
           
          ],
        },

         {
          id: 6,
          text: 'Training Benchmarking',
          images: [
            { id: 1, image: placeholderImage, text: "Caption Text 1" },
           
           
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