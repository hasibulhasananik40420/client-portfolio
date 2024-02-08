/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import chad from "../../assets/chad.png";

const Footer = () => {

   const {pathname} = useLocation()


  return (
    <div className="bg-[#F2F2F2] h-full w-full">
      <div className="max-w-container mx-auto lg:flex gap-3 justify-between h-full md:py-[66px] py-[10px] lg:px-[230px] xl:px-[230px] 2xl:px-[230px]  px-4 md:px-8">
        <div className="md:block hidden">
          <Link to={"/"} className="flex items-center gap-4  h-[60px]">
            <div>
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={chad}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[#2B2B2B] text-[16px] font-Montserrat font-bold leading-[34px]">
                Chad
              </h1>
              <p className="text-[#2B2B2B] text-[12px] font-Montserrat font-normal leading-[16px]">
                Senior UX Researcher
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-8 md:mt-8 lg:mt-0">
          <p className="text-[14px] text-[#2B2B2B] font-Montserrat font-medium leading-6 border-b-[1px] border-black w-[100px]">
            Case Studies
          </p>
         
          

          <Link to={"/driver-application"} className={`${pathname==='/driver-application'? 'bg-[#88BFF7]':'bg-white border-[1px] border-[#828282]'} md:mt-4 mt-6 border-[1px]  lg:w-[210px] w-full h-[80px] flex flex-col justify-center items-center rounded-lg hover:bg-[#E9ECEF] hover:border-[#88BFF7] duration-300`}>
            <div  className=" cursor-pointer">
              <h1 className="text-[#2B2B2B] text-center text-[16px] font-Montserrat font-semibold leading-[30px]">
              Product Redesign
              </h1>

              <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px] text-center">
              Driver Application
              </p>
            </div>
          </Link>
        </div>

        <Link to={"/suggested-fuel-stops"} className={`${pathname==='/suggested-fuel-stops'? 'bg-[#88BFF7] border-[#88BFF7]':'bg-white'}  lg:mt-10 mt-6 border-[1px] border-[#828282] lg:w-[210px] w-full h-[80px] flex flex-col justify-center items-center rounded-lg hover:bg-[#E9ECEF] hover:border-[#88BFF7] duration-300`}>
          <div  className=" cursor-pointer">
            <h1 className="text-[#2B2B2B] text-center text-[16px] font-Montserrat font-semibold leading-[30px]">
              New Feature
            </h1>

            <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px] text-center">
              Suggested Fuel Stops
            </p>
          </div>
        </Link>

        <Link   to={"/automated-equipment-dispatching"} className={`${pathname==='/automated-equipment-dispatching'? 'bg-[#88BFF7] border-[#88BFF7]':'bg-white'}  lg:mt-10 mt-6 border-[1px] border-[#828282] lg:w-[210px] w-full h-[80px] flex flex-col justify-center items-center rounded-lg hover:bg-[#E9ECEF] hover:border-[#88BFF7] duration-300`}>
          <div
          
            className=" cursor-pointer"
          >
            <h1 className="text-[#2B2B2B] text-[16px] text-center font-Montserrat font-semibold leading-[30px]">
              New Feature
            </h1>

            <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px] text-center">
              Automated Dispatching
            </p>
          </div>
        </Link>

        <div className="md:hidden block mt-11 mb-8">
          <Link to={"/"} className="flex items-center gap-4  h-[60px]">
            <div>
              <img
                className="w-[50px] h-[50px] rounded-full"
                src={chad}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[#2B2B2B] text-[16px] font-Montserrat font-bold leading-[34px]">
                Chad
              </h1>
              <p className="text-[#2B2B2B] text-[12px] font-Montserrat font-normal leading-[16px]">
                Senior UX Researcher
              </p>
            </div>
          </Link>
        </div>


      </div>
    </div>
  );
};

export default Footer;
