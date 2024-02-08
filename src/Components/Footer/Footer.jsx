/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import chad from "../../assets/chad.png";

const Footer = () => {
  return (
    <div className="bg-white h-full w-full">
      <div className="max-w-container 2xl:max-w-[1340px] mx-auto lg:flex gap-6 md:flex-wrap justify-between h-full py-[66px] lg:px-[230px] xl:px-[230px] 2xl:px-[230px]  px-4 md:px-8">
        <div>
          <Link to={"/"} className="flex items-center gap-4  h-[60px]">
            <div>
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={chad}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-[#2B2B2B] text-[20px] font-Montserrat font-bold leading-[34px]">
                Chad
              </h1>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal leading-[30px]">
                Senior UX Researcher
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-8 md:mt-8 lg:mt-0">
          <p className="text-[14px] text-[#2B2B2B] font-Montserrat font-medium leading-6 underline underline-offset-4">
            Case Studies
          </p>

          <div className="mt-4">
            <Link to={"/driver-app"} className=" cursor-pointer">
              <h1 className="text-[#2B2B2B] text-[17px] font-Montserrat font-semibold leading-[30px]">
                Product Design
              </h1>

              <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px]">
                Driver Application
              </p>
            </Link>
          </div>


        </div>

        <div className="mt-10">
            <Link to={"/fuel-stops"} className=" cursor-pointer">
              <h1 className="text-[#2B2B2B] text-[17px] font-Montserrat font-semibold leading-[30px]">
              New Feature
              </h1>

              <p className="text-[#2B2B2B] text-[12px] mt-[2px] font-Montserrat font-normal leading-[20px]">
              Suggested Fuel Stops
              </p>
            </Link>
          </div>

            <div className="mt-10">
            <Link to={"/automated-equipment-dispatching"} className=" cursor-pointer">
              <h1 className="text-[#2B2B2B] text-[17px] font-Montserrat font-semibold leading-[30px]">
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
