/* eslint-disable react/no-unescaped-entities */

const ResearchImpactCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mt-6 mb-[90px] ">
      <div className="lg:w-[424px] w-full h-auto p-4">
        <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
          1. Enhanced product training & roadmap
        </h1>

        <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
          {" "}
          Provide insights that impacted training material and feature prioritization across product roadmaps 
        </p>
      </div>

      <div className="lg:w-[424px] w-full h-auto p-4 ">
        <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
         2. Derisking product launch 

        </h1>

        <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
        Established a standard assessment process for launching a new product that measures effectiveness of training and product satisfaction after specific intervals of usage

        </p>
      </div>

      
    </div>
  );
};

export default ResearchImpactCard;
