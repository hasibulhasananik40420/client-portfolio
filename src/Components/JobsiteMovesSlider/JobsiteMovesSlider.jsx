import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineMinus } from "react-icons/ai";
//add image
import ResearchPlanImage1 from "../../assets/JobsiteMoves/Research Plan/Jobsite Moves - Research Plan.png"


import ProcessMappingServiceDesignBlueprintsImage1 from "../../assets/JobsiteMoves/Process Mapping Service Design Blueprints/image1.png"
import ProcessMappingServiceDesignBlueprintsImage2 from "../../assets/JobsiteMoves/Process Mapping Service Design Blueprints/image2.jpg"



// import ExecutivePresentationImage1 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-01.jpg"
// import ExecutivePresentationImage2 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-02.jpg"
// import ExecutivePresentationImage3 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-03.jpg"
import ExecutivePresentationImage4 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-04.jpg"
import ExecutivePresentationImage5 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-05.jpg"
import ExecutivePresentationImage6 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-06.jpg"
import ExecutivePresentationImage7 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-07.jpg"
import ExecutivePresentationImage8 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-08.jpg"
// import ExecutivePresentationImage9 from "../../assets/JobsiteMoves/Executive Presentation/workflow2-09.jpg"



import CustomSliderVTwo from "../Slider/CustomSliderVTwo";
import { useState } from "react";

const JobsiteMovesSlider = () => {


      const faqData = [
        
        {
          id: 1,
          text: 'Research Plan',
          images: [
            { id: 1, image: ResearchPlanImage1, text: "Assumption Mapping: Workshop Board" },
           
          ],
        }, 
        {
          id: 2,
          text: 'Service Design Blueprints',
          images: [
            { id: 1, image: ProcessMappingServiceDesignBlueprintsImage1, text: "Contextual Inquiry: Research Plan" },
            { id: 2, image: ProcessMappingServiceDesignBlueprintsImage2, text: "Contextual Inquiry: Note Taking Guide (Google Doc)" },
            
            
          ],
        },
        {
          id: 3,
          text: 'Executive Presentation',
          images: [
            // { id: 1, image: ExecutivePresentationImage1, text: "Learnings Prioritization: Prioritization Working File" },
            // { id: 2, image: ExecutivePresentationImage2, text: "Learnings Prioritization: Prioritization Working File" },
            // { id: 3, image: ExecutivePresentationImage3, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 4, image: ExecutivePresentationImage4, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 5, image: ExecutivePresentationImage5, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 6, image: ExecutivePresentationImage6, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 7, image: ExecutivePresentationImage7, text: "Learnings Prioritization: Prioritization Working File" },
            { id: 8, image: ExecutivePresentationImage8, text: "Learnings Prioritization: Prioritization Working File" },
            // { id: 9, image: ExecutivePresentationImage9, text: "Learnings Prioritization: Prioritization Working File" },
           
           
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