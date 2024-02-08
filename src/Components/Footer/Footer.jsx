/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import chad from "../../assets/chad.png";

const Footer = () => {
  return (
    <div className="bg-[#F2F2F2] h-full w-full">
      <div className="max-w-container mx-auto lg:flex gap-3 md:flex-wrap justify-between h-full py-[66px] lg:px-[230px] xl:px-[230px] 2xl:px-[230px]  px-4 md:px-8">
        <div>
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
          <p className="text-[14px] text-[#2B2B2B] font-Montserrat font-medium leading-6 border-b-[1px] border-black w-[100px] hover:border-[#88BFF7] hover:cursor-pointer duration-200">
            Case Studies
          </p>
         
          

          <div className="mt-4 bg-[#88BFF7] w-[210px] h-[80px] flex flex-col justify-center items-center rounded-lg">
            <Link to={"/driver-application"} className=" cursor-pointer">
              <h1 className="text-[#2B2B2B] text-[16px] font-Montserrat font-semibold leading-[30px]">
              Product Redesign
              </h1>

              <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px]">
              Driver Application
              </p>
            </Link>
          </div>
        </div>

        <div className="mt-10 border-[1px] border-[#828282] w-[210px] h-[80px] flex flex-col justify-center items-center rounded-lg">
          <Link to={"/fuel-stops"} className=" cursor-pointer">
            <h1 className="text-[#2B2B2B] text-[16px] font-Montserrat font-semibold leading-[30px]">
              New Feature
            </h1>

            <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px]">
              Suggested Fuel Stops
            </p>
          </Link>
        </div>

        <div className="mt-10 border-[1px] border-[#828282] w-[210px] h-[80px] flex flex-col justify-center items-center rounded-lg">
          <Link
            to={"/automated-equipment-dispatching"}
            className=" cursor-pointer"
          >
            <h1 className="text-[#2B2B2B] text-[16px] font-Montserrat font-semibold leading-[30px]">
              New Feature
            </h1>

            <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px]">
              Automated Dispatching
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
