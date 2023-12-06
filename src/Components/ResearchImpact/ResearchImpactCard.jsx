/* eslint-disable react/no-unescaped-entities */

const ResearchImpactCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mt-6 mb-[90px] ">
      <div className="lg:w-[424px] w-full h-auto p-4">
        <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
          1. Derisking rollout of new features 

        </h1>

        <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
        Established a standard assessment process for launching major product changes that measures effectiveness of training provided and product satisfaction after specific intervals of usage

        </p>
      </div>

      <div className="lg:w-[424px] w-full h-auto p-4 ">
        <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">
         2. Enhanced training & product roadmap

        </h1>

        <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4">
        Provided insights that impacted training material and feature prioritization on the product roadmap 


        </p>
      </div>

      
    </div>
  );
};

export default ResearchImpactCard;
