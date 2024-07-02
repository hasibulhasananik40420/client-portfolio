import { useState } from "react";

import ExperienceMappingImage1 from "../../assets/Automated Dispatching/Experience Mapping/001.png"
import ExperienceMappingImage2 from "../../assets/Automated Dispatching/Experience Mapping/003.png"
import ExperienceMappingImage3 from "../../assets/Automated Dispatching/Experience Mapping/005.png"
import ExperienceMappingImageextra from "../../assets/Automated Dispatching/Experience Mapping/extra.png"

import ExperienceMappingImage4 from "../../assets/Automated Dispatching/Experience Mapping/006.png"
import ExperienceMappingImage5 from "../../assets/Automated Dispatching/Experience Mapping/experiencing_mapping__fifth_image_.png"
import ExperienceMappingImage6 from "../../assets/Automated Dispatching/Experience Mapping/xperiencing_mapping__sixth_image_.png"


import NarrativeImage1 from "../../assets/Automated Dispatching/Narrative for Day-in-the-Life (Supported)/001.png"


import PanelDiscussionImage1 from "../../assets/Automated Dispatching/Panel Discussion for Day-in-the-Life/A Day In The Life_ Panel Discussion.png"


import ConceptTestingImage1 from "../../assets/Automated Dispatching/Concept Testing/001.png"
import ConceptTestingImage2 from "../../assets/Automated Dispatching/Concept Testing/002.png"
import ConceptTestingImage3 from "../../assets/Automated Dispatching/Concept Testing/003.png"
import ConceptTestingImage4 from "../../assets/Automated Dispatching/Concept Testing/004.png"
import ConceptTestingImage5 from "../../assets/Automated Dispatching/Concept Testing/006.png"


import ExperienceBenchmarkingSupportedImage1 from "../../assets/Automated Dispatching/Experience Benchmarking (Supported)/001.png"
import ExperienceBenchmarkingSupportedImage2 from "../../assets/Automated Dispatching/Experience Benchmarking (Supported)/experience_benchmarking__supported___second_image__.png"



import TrainingBenchmarkingImage1 from '../../assets/Automated Dispatching/Traning/training_benchmark__first_image__720.png'
import TrainingBenchmarkingImage2 from '../../assets/Automated Dispatching/Traning/training_benchmark__second_image__720.png'
import TrainingBenchmarkingImage3 from '../../assets/Automated Dispatching/Traning/training_benchmark__third_image__720.png'
import TrainingBenchmarkingImage4 from '../../assets/Automated Dispatching/Traning/training_benchmark__fourth_image__720.png'
import TrainingBenchmarkingImage5 from '../../assets/Automated Dispatching/Traning/training_benchmark__fifth_image__720.png'



import { AiOutlineMinus } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import CustomSliderVTwo from "../Slider/CustomSliderVTwo";



const DispatchingFaqSlider = () => {

    const faqData = [
        
        {
          id: 1,
          text: 'Experience Mapping',
          images: [
            { id: 1, image: ExperienceMappingImage1, text: "Experience Mapping - Research Plan" },
            { id: 2, image: ExperienceMappingImage2, text: "Experience Mapping - Interview Guide" },
            { id: 3, image: ExperienceMappingImage3, text: " Experience Mapping - Data Capturing File (Documentation Example)" },
            { id: 9, image: ExperienceMappingImageextra, text: "Experience Mapping - Data Capturing File (Documentation Example)" },
            { id: 4, image: ExperienceMappingImage4, text: " Experience Mapping - Workflow Maps to Synthesize Findings" },
            { id: 5, image: ExperienceMappingImage5, text: "Experience Mapping - Report Readout (1 out of 2)" },
            { id: 6, image: ExperienceMappingImage6, text: "Experience Mapping - Report Readout (2 out of 2)" },
           
           
          ],
        }, 
        {
          id: 2,
          text: 'A Day In The Life Narrative: Current State (Supported)',
          images: [
            { id: 1, image: NarrativeImage1, text: "A Day In The Life Narrative: Current State (Supported)" },
           
          ],
        },
        {
          id: 3,
          text: 'A Day In The Life: Panel Discussion',
          images: [
            { id: 1, image: PanelDiscussionImage1, text: "A Day In The Life: Panel Discussion" },
           
           
          ],
        },

 {
          id: 4,
          text: 'Concept Testing',
          images: [
            { id: 1, image: ConceptTestingImage1, text: "Concept Testing - Research Plan (1 of 2)" },
            { id: 2, image: ConceptTestingImage2, text: " Concept Testing - Research Plan (2 of 2) " },
            { id: 3, image: ConceptTestingImage3, text: "Concept Testing -  Interview Guide " },
            { id: 4, image: ConceptTestingImage4, text: "Concept Testing -  Report Readout (1 of 2)" },
            { id: 5, image: ConceptTestingImage5, text: "Concept Testing -  Report Readout (2 of 2)" },
           
          ],
        },

        {
          id: 5,
          text: 'Experience Benchmarking (Supported)',
          images: [
            { id: 1, image: ExperienceBenchmarkingSupportedImage1, text: "Benchmarking: UMUX-Lite Survey" },
            { id: 2, image: ExperienceBenchmarkingSupportedImage2, text: "Benchmarking - Report Readout " },
           
          ],
        },

         {
          id: 6,
          text: 'Training Benchmarking',
          images: [
            { id: 1, image: TrainingBenchmarkingImage1, text: "Benchmarking: Training Survey (1 out 5)" },
            { id: 2, image: TrainingBenchmarkingImage2, text: "Benchmarking: Training Survey (2 out 5) " },
            { id: 3, image: TrainingBenchmarkingImage3, text: "Benchmarking: Training Survey (3 out 5)" },
            { id: 4, image: TrainingBenchmarkingImage4, text: "Training Survey (4 out 5) " },
            { id: 5, image: TrainingBenchmarkingImage5, text: "Training Survey (5 out 5)" },
           
           
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

export default DispatchingFaqSlider