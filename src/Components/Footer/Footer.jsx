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
    <div className="bg-[#F2F2F2] h-full w-full mt-10">
      {/* <div className="max-w-containerX mx-auto md:flex md:items-center md:gap-32 px-4 md:px-8 lg:px-4 py-16 md:py-12">
        <Link to={"/"} className="flex items-center gap-4 w-[250px] h-[60px]">
          <div>
            <img className="w-[60px] h-[60px] rounded-full" src={chad} alt="" />
          </div>
          <div>
            <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px]">
              Chad
            </h1>
            <p className="text-[#2B2B2B] text-[14px] font-Montserrat font-medium leading-[20px]">
              Senior UX Researcher
            </p>
          </div>
        </Link>

        <div className="mt-14 md:mt-0">
          <h1 className="text-[16px] text-[#2B2B2B] font-Montserrat font-medium">
            SEE MORE OF MY WORK:
          </h1>

          {pathname === "/automated-equipment-dispatching" ? (
            <>
              <Link to={'/fuel-stops'} className="flex cursor-pointer mt-3">
                <div className="w-16 h-14 bg-[#06D6A0]"></div>
                <div className="h-14 bg-white shadow w-[280px] px-6 py-[6px]">
                  <h1 className="text-[16px] text-[#2B2B2B] font-Montserrat font-medium mt-2">
                  Suggested Fuel Stops
                  </h1>
                </div>
              </Link>
            </>
          ) : pathname === "/fuel-stops" ? (
            <>
              <Link to={'/automated-equipment-dispatching'} className="flex cursor-pointer mt-3">
                <div className="w-16 h-14 bg-[#06D6A0]"></div>
                <div className="h-14 bg-white shadow w-[280px] px-6 py-[6px]">
                  <h1 className="text-[16px] text-[#2B2B2B] font-Montserrat font-medium flex justify-center items-center">
                    {" "}
                    Automated Equipment Dispatching 
                  </h1>
                </div>
              </Link>
            </>
          ) : pathname === "/driver-app" ? (
            <>
               <Link to={'/automated-equipment-dispatching'} className="flex cursor-pointer mt-3">
                <div className="w-16 h-14 bg-[#06D6A0]"></div>
                <div className="h-14 bg-white shadow w-[280px] px-6 py-[6px]">
                  <h1 className="text-[16px] text-[#2B2B2B] font-Montserrat font-medium flex justify-center items-center">
                    {" "}
                    Automated Equipment Dispatching 
                  </h1>
                </div>
              </Link>
            </>
          ) : (
            ''
          )}
        </div>
      </div> */}

       <div className="max-w-containerX mx-auto flex justify-between h-[313px] pt-[96px]">
       <Link to={"/"} className="flex items-center gap-4 w-[250px] h-[60px] mt-10">
          <div>
            <img className="w-[60px] h-[60px] rounded-full" src={chad} alt="" />
          </div>
          <div>
            <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-semibold leading-[30px]">
              Chad
            </h1>
            <p className="text-[#2B2B2B] text-[14px] font-Montserrat font-medium leading-[20px]">
              Senior UX Researcher
            </p>
          </div>
        </Link>

           <div>
             <div className="flex items-center gap-3">

               <img className="w-[92px] h-[60px]" src={image1} alt="" />

                <div>
                
                  <h1 className="text-black text-[20px] font-Montserrat font-semibold leading-8">Driver App</h1>
                  <p className="text-black text-[14px] font-Montserrat font-normal leading-5">Product Redesign</p>
                </div>

             </div> 
             
             <div className="flex items-center gap-3 mt-10">

               <img className="w-[92px] h-[60px]" src={image2} alt="" />

                <div>
                
                  <h1 className="text-black text-[20px] font-Montserrat font-semibold leading-8">Automated Equipment Dispatching</h1>
                  <p className="text-black text-[14px] font-Montserrat font-normal leading-5">New Product </p>
                </div>

             </div>
           </div>


              <div>
              <div className="flex items-center gap-3">

<img className="w-[92px] h-[60px]" src={image3} alt="" />

 <div>
 
   <h1 className="text-black text-[20px] font-Montserrat font-semibold leading-8">Suggested Fuel Stops</h1>
   <p className="text-black text-[14px] font-Montserrat font-normal leading-5">New Feature  </p>
 </div>

</div>
              </div>


       </div>

        



       
    </div>
  );
};

export default Footer;
