/* eslint-disable react/no-unescaped-entities */

const ImpactCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6 mb-[90px] ">
        <div className="lg:w-[424px] w-full h-auto p-4">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">1. Enhanced Fuel Efficiency</h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4"> Through user research and design, we aim to create a feature that will significantly improve fuel efficiency for users. By providing optimized fueling recommendations, we anticipate that users will save money on fuel costs and reduce their carbon footprint, contributing to a more eco-conscious travel experience.</p>
        </div> 
        
        
        <div className="lg:w-[424px] w-full h-auto p-4 ">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">2. Time Savings</h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4"> Our research-driven design approach is focused on reducing travel times and increasing convenience for users. We intend to streamline journeys by minimizing the time spent searching for fuel stations, ultimately leading to improved user experiences and saved time for other activities.</p>
        </div> 
        
        <div className="lg:w-[424px] w-full h-auto p-4 ">
            <h1 className="text-[#2B2B2B] text-[20px] font-Playfair font-semibold leading-[30px]">3. Cost Savings</h1>

            <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[24px] mt-4"> By implementing this feature, we anticipate that users will benefit from cost savings on fuel expenses. Our goal is to create a solution that positively impacts users' financial well-being, aligning with their needs and preferences.</p>
        </div>
    </div>
  )
}

export default ImpactCard