import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineMinus } from "react-icons/ai";
//add image
import ResearchPlanImage1 from "../../assets/JobsiteMoves/Research Plan/Jobsite Moves - Research Plan.png"


import ProcessMappingServiceDesignBlueprintsImage1 from "../../assets/JobsiteMoves/Process Mapping Service Design Blueprints/image1.png"
import ProcessMappingServiceDesignBlueprintsImage2 from "../../assets/JobsiteMoves/Process Mapping Service Design Blueprints/image2.jpg"



import ExecutivePresentationImage4 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-04.jpg"
import ExecutivePresentationImage5 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-05.jpg"
import ExecutivePresentationImage6 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-06.png"
import ExecutivePresentationImage7 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-07.jpg"
import ExecutivePresentationImage8 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-08.jpg"



import CustomSliderVTwo from "../Slider/CustomSliderVTwo";
import { useState } from "react";

const JobsiteMovesSlider = () => {


      const faqData = [
        
        {
          id: 1,
          text: 'Research Plan',
          images: [
            { id: 1, image: ResearchPlanImage1, text: " Research Plan" },
           
          ],
        }, 
        {
          id: 2,
          text: 'Service Design Blueprints',
          images: [
            { id: 1, image: ProcessMappingServiceDesignBlueprintsImage1, text: "Service Design Blueprint - Extensive Map" },
            { id: 2, image: ProcessMappingServiceDesignBlueprintsImage2, text: "Service Design Blueprint - General Map" },
            
            
          ],
        },
        {
          id: 3,
          text: 'Executive Presentation',
          images: [
           
            { id: 4, image: ExecutivePresentationImage4, text: "Executive Presentation  - Intro" },
            { id: 5, image: ExecutivePresentationImage5, text: "Executive Presentation - General Map " },
            { id: 6, image: ExecutivePresentationImage6, text: " Executive Presentation - Findings (1 of 3)" },
            { id: 7, image: ExecutivePresentationImage7, text: "Executive Presentation - Findings (2 of 3) " },
            { id: 8, image: ExecutivePresentationImage8, text: "Executive Presentation - Findings (3 of 3) " },
           
           
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