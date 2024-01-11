/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import chad from "../../assets/chad.png";
import image1 from '../../assets/footer/Rectangle 9 (1).png'
import image2 from '../../assets/footer/Rectangle 9 (2).png'
import image3 from '../../assets/footer/Rectangle 10 (1).png'

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-[#F2F2F2] h-full w-full">
      

       <div className="max-w-containerX mx-auto flex justify-between h-[328px] py-[66px] px-4 md:px-8 lg:px-4 2xl:px-0">

        
       <Link to={"/"} className="flex items-center gap-4  h-[60px]">
          <div>
            <img className="w-[60px] h-[60px] rounded-full" src={chad} alt="" />
          </div>
          <div>
            <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-bold leading-[34px]">
              Chad
            </h1>
            <p className="text-[#2B2B2B] text-[20px] font-Montserrat font-normal leading-[30px]">
            Senior UX Researcher
            </p>
          </div>
        </Link>

           <div>
             <h1 className="text-[#2B2B2B] text-[16px] font-Montserrat font-medium leading-6">List</h1>
             <div className="flex items-center gap-3 mt-4">

               <img className="w-[92px] h-[60px]" src={image1} alt="" />

                <div>
                
                  <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px]">Driver App</h1>
                  <p className="text-[#2B2B2B] text-[14px] font-Montserrat font-normal leading-5">Product Redesign</p>
                </div>

             </div> 
             
             <div className="flex items-center gap-3 mt-10">

               <img className="w-[92px] h-[60px]" src={image2} alt="" />

                <div>
                
                <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px]">Automated Equipment Dispatching</h1>
                  <p className="text-[#2B2B2B] text-[14px] font-Montserrat font-normal leading-5">New Product </p>
                </div>

             </div>
           </div>


              <div>
              <div className="flex items-center gap-3">

               <img className="w-[92px] h-[60px]" src={image3} alt="" />

               <div>
                
                <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px]">Suggested Fuel Stops</h1>
                  <p className="text-[#2B2B2B] text-[14px] font-Montserrat font-normal leading-5">New Feature  </p>
                </div>

                </div>
              </div>


       </div>

        



       
    </div>
  );
};

export default Footer;
