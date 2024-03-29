import { useState } from "react";

import ExperienceMappingImage1 from "../../assets/Automated Dispatching/Experience Mapping/001.png"
import ExperienceMappingImage2 from "../../assets/Automated Dispatching/Experience Mapping/003.png"
import ExperienceMappingImage3 from "../../assets/Automated Dispatching/Experience Mapping/005.png"
import ExperienceMappingImage4 from "../../assets/Automated Dispatching/Experience Mapping/006.png"
import ExperienceMappingImage5 from "../../assets/Automated Dispatching/Experience Mapping/007.png"
import ExperienceMappingImage6 from "../../assets/Automated Dispatching/Experience Mapping/010.png"


import NarrativeImage1 from "../../assets/Automated Dispatching/Narrative for Day-in-the-Life (Supported)/001.png"


import PanelDiscussionImage1 from "../../assets/Automated Dispatching/Panel Discussion for Day-in-the-Life/Screenshot 2023-11-27 at 7.12.38 PM (1).png"


import ConceptTestingImage1 from "../../assets/Automated Dispatching/Concept Testing/001.png"
import ConceptTestingImage2 from "../../assets/Automated Dispatching/Concept Testing/002.png"
import ConceptTestingImage3 from "../../assets/Automated Dispatching/Concept Testing/003.png"
import ConceptTestingImage4 from "../../assets/Automated Dispatching/Concept Testing/004.png"
import ConceptTestingImage5 from "../../assets/Automated Dispatching/Concept Testing/006.png"


import ExperienceBenchmarkingSupportedImage1 from "../../assets/Automated Dispatching/Experience Benchmarking (Supported)/001.png"
import ExperienceBenchmarkingSupportedImage2 from "../../assets/Automated Dispatching/Experience Benchmarking (Supported)/002.png"

import TrainingBenchmarkingImage1 from '../../assets/Automated Dispatching/Traning/Screenshot 2023-12-28 at 6.51.05 PM.png'
import TrainingBenchmarkingImage2 from '../../assets/Automated Dispatching/Traning/Screenshot 2023-12-28 at 6.46.13 PM.png'
import TrainingBenchmarkingImage3 from '../../assets/Automated Dispatching/Traning/Screenshot 2023-12-28 at 6.45.58 PM.png'
import TrainingBenchmarkingImage4 from '../../assets/Automated Dispatching/Traning/Screenshot 2023-12-28 at 6.46.26 PM.png'
import TrainingBenchmarkingImage5 from '../../assets/Automated Dispatching/Traning/Screenshot 2023-12-28 at 6.46.47 PM.png'



import { AiOutlineMinus } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import CustomSliderVTwo from "../Slider/CustomSliderVTwo";



const DispatchingFaqSlider = () => {

    const faqData = [
        
        {
          id: 1,
          text: 'Experience Mapping',
          images: [
            { id: 1, image: ExperienceMappingImage1, text: "Experience Mapping: Research Plan" },
            { id: 2, image: ExperienceMappingImage2, text: "Experience Mapping: Interview Guide" },
            { id: 3, image: ExperienceMappingImage3, text: "Experience Mapping: Data Capturing File" },
            { id: 4, image: ExperienceMappingImage4, text: "Experience Mapping: Synthesis" },
            { id: 5, image: ExperienceMappingImage5, text: "Experience Mapping: Report Readout (1 out of 2)" },
            { id: 6, image: ExperienceMappingImage6, text: "Experience Mapping: Report Readout (2 out of 2)" },
           
           
          ],
        }, 
        {
          id: 2,
          text: 'Day-in-the-Life Narrative(Supported)',
          images: [
            { id: 1, image: NarrativeImage1, text: "Day-in-the-Life Narrative: Current State" },
           
          ],
        },
        {
          id: 3,
          text: 'Day-in-the-Life Panel Discussion',
          images: [
            { id: 1, image: PanelDiscussionImage1, text: "Day-in-the-Life Panel: Interview Guide" },
           
           
          ],
        },

 {
          id: 4,
          text: 'Concept Testing',
          images: [
            { id: 1, image: ConceptTestingImage1, text: "Concept Testing: Research Plan" },
            { id: 2, image: ConceptTestingImage2, text: "Concept Testing: Interview Guide" },
            { id: 3, image: ConceptTestingImage3, text: "Concept Testing: Analysis" },
            { id: 4, image: ConceptTestingImage4, text: "Caption Text 2" },
            { id: 5, image: ConceptTestingImage5, text: "Caption Text 2" },
           
          ],
        },

        {
          id: 5,
          text: 'Experience Benchmarking (Supported)',
          images: [
            { id: 1, image: ExperienceBenchmarkingSupportedImage1, text: "Benchmarking: UMUX-Lite for Current Experience" },
            { id: 2, image: ExperienceBenchmarkingSupportedImage2, text: "Benchmarking: Report Readout" },
           
          ],
        },

         {
          id: 6,
          text: 'Training Benchmarking',
          images: [
            { id: 1, image: TrainingBenchmarkingImage1, text: "Benchmarking: Servey for Virtual Training" },
            { id: 2, image: TrainingBenchmarkingImage2, text: "Benchmarking: Servey for In-person Training (1 out 4)" },
            { id: 3, image: TrainingBenchmarkingImage3, text: "Benchmarking: Servey for In-person Training (2 out 4)" },
            { id: 4, image: TrainingBenchmarkingImage4, text: "Benchmarking: Servey for In-person Training (3 out 4)" },
            { id: 5, image: TrainingBenchmarkingImage5, text: "Benchmarking: Servey for In-person Training (4 out 4)" },
           
           
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

export default DispatchingFaqSlider