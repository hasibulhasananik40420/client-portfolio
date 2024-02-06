/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import doc from "../../assets/Frame 66.svg";
import React from "react";

const Header = () => {

     const products = [
      {
        _id:1,
         title:'Product Redesign',
         subTitle:'Driver App',
         para:'Redesigning an internal application',
         link:'/driver-app'
      },

{
        _id:2,
         title:'New Feature',
         subTitle:'Suggested Fuel Stops',
         para:' Pinpointing opportunities to recommend fueling stations',
         link:'/fuel-stops'
      },

{
        _id:3,
         title:' New Feature',
         subTitle:'Automated Dispatching',
         para:'Helping Launch a new major feature',
         link:'/automated-equipment-dispatching'
      },




     ]



  return (
    <div className="max-w-container mx-auto lg:px-[200px] xl:px-[200px] 2xl:px-0  px-4 md:px-8 py-6 ">
      <div className="lg:flex justify-center lg:gap-6 2xl:gap-6">
        <div className="">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <img
                className="w-full md:w-full lg:w-[280px] xl:w-[280px] 2xl:w-[424px]  md:mx-auto lg:mx-0 2xl:h-[420px] lg:h-[340px] xl:h-[340px] md:h-[600px] h-[350px] rounded-lg "
                src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/collections/a14009ec-3cfd-4ee1-bda6-acbd78e90f0f/t6ZGYj060JbLeYt1.png"
                alt=""
              />
            </div>

            <div className=" ">
              <h1 className="text-[28px] font-semibold text-[#2B2B2B] font-Montserrat leading-[38px] mt-7">
                Chad Smith
              </h1>
              <p className="text-[20px] font-Montserrat font-medium leading-[30px] text-[#2B2B2B] mt-1">
                Senior UX Researcher
              </p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[280px] xl:w-[280px] 2xl:w-[424px] text-justify leading-6">
              UX Researcher with focus area in advancing internal and enterprise
                systems for B2BA and B2C audiences.
              </p>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[280px] xl:w-[280px] 2xl:w-[424px] text-justify leading-6">
                I'm currently searching for roles focused on growing a user base and measuring & improving user behavior against defined business goals.
              </p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[280px] xl:w-[280px] 2xl:w-[424px] text-justify leading-6">
                I also enjoy designing wireframes, and I'm currently enrolled in certification trainings in statistics and date science.
              </p>
            </div>
          </div>

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-start mt-5">
            <a target="_blank" href="https://www.linkedin.com/in/chadxsmith/">
              {" "}
              <img
                className="w-[30px] h-[30px] object-cover rounded-full cursor-pointer"
                src={linkedin}
                alt=""
              />{" "}
            </a>

            <a href="mailto:info@chadxsmith.co" target="_blank">
              {" "}
              <img
                className="w-[30px] h-[30px] object-cover rounded-full cursor-pointer"
                src={email}
                alt=""
              />
            </a>
            <a
              href="https://drive.google.com/file/d/16pu0ysZ4vX7aDGJGoIxZrMIfmGO83rLm/view"
              target="_blank"
            >
              <img
                className="w-[30px] h-[30px] object-cover rounded-full cursor-pointer"
                src={doc}
                alt=""
              />
            </a>
          </div>

         
          {/********************** socal media icon end here *************************/}
        </div>


        <div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 2xl:ml-6 xl:ml-5 lg:ml-5 ml-0 lg:mt-0 md:mt-10 mt-10">


            {
              products?.map(product=> <React.Fragment key={product._id}>
              
              <Link to={product?.link}
              className="2xl:w-[400px] xl:w-[250px] lg:w-[250px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group  hover:border-[#88bff7] hover:cursor-pointer duration-300"
              style={{ boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div
                
                className="bg-[#F9FAFB] 2xl:h-[320px] xl:h-[260px] lg:h-[260px] md:h-[320px] h-[320px] p-6 flex flex-col gap-2 justify-center items-center group-hover:bg-[#88bff7] group-hover:rounded-t-[12px] duration-300"
              >
                <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[20px] lg:text-[20px] md:text-[28px] text-[28px] font-Montserrat font-semibold leading-[38px] text-center">
                  {product?.title}
                </h1>
                <p className="text-[#242424] 2xl:text-[20px] xl:text-[13px] lg:text-[13px] md:text-[20px] text-[20px] font-Montserrat font-medium leading-[30px] text-center">
                  {product?.subTitle}
                </p>
              </div>

              <div className="px-6 2xl:py-[32px] xl:py-[20px] lg:py-[20px] md:py-[32px] py-[32px]">
                <h3 className="text-[#2B2B2B] 2xl:text-[18px] xl:text-[14px] lg:text-[14px] md:text-[18px] text-[18px] text-center font-Montserrat font-normal xl:leading-5 lg:leading-5 md:leading-7 leading-7 2xl:leading-7">
                 {product?.para}
                </h3>
              </div>
            </Link>
              
              </React.Fragment>)
            }




            {/* <Link to={"/driver-app"}
              className="2xl:w-[400px] xl:w-[330px] lg:w-[290px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group  hover:border-[#88bff7] hover:cursor-pointer duration-300"
              style={{ boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div
                
                className="bg-[#F9FAFB] h-[320px] p-6 flex flex-col gap-2 justify-center items-center group-hover:bg-[#88bff7] group-hover:rounded-t-[12px] duration-300"
              >
                <h1 className="text-[#242424] 2xl:text-[28px] xl:text-[28px] lg:text-[24px] md:text-[28px] text-[28px] font-Montserrat font-semibold leading-[38px] text-center">
                  Product Redesign{" "}
                </h1>
                <p className="text-[#242424] 2xl:text-[20px] xl:text-[20px] lg:text-[16px] md:text-[20px] text-[20px] font-Montserrat font-medium leading-[30px] text-center">
                  Driver App
                </p>
              </div>

              <div className="px-6 2xl:py-[32px] xl:py-[32px] lg:py-[24px]">
                <h3 className="text-[#2B2B2B] 2xl:text-[18px] xl:text-[18px] lg:text-[16px] md:text-[18px] text-[18px] text-center font-Montserrat font-normal leading-7">
                 Redesigning an internal application
                </h3>
              </div>
            </Link> */}

              

            {/* <Link  to={"/fuel-stops"}
              className="2xl:w-[400px] xl:w-[330px] lg:w-[290px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group hover:border-[#88bff7] hover:cursor-pointer duration-300"
              style={{ boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div
               
                className="bg-[#F9FAFB] h-[320px] p-6 flex flex-col gap-2 justify-center items-center group-hover:bg-[#88bff7] group-hover:rounded-t-[12px] duration-300"
              >
                <h1 className="text-[#242424] text-[28px] font-Montserrat font-semibold leading-[38px] text-center">
                  New Feature
                </h1>
                <p className="text-[#242424] text-[20px] font-Montserrat font-medium leading-[30px] text-center">
                  Suggested Fuel Stops
                </p>
              </div>

              <div className="px-6 py-[32px]">
                <h3 className="text-[#2B2B2B] text-[18px] text-center font-Montserrat font-normal leading-7">
                  Pinpointing opportunities to recommend fueling stations
                </h3>
              </div>
            </Link> */}
{/* 
            <Link to={"/automated-equipment-dispatching"}
              className="2xl:w-[400px] xl:w-[330px] lg:w-[290px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group hover:border-[#88bff7] hover:cursor-pointer duration-300"
              style={{ boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div
                
                className="bg-[#F9FAFB] h-[320px] p-6 flex flex-col gap-2 justify-center items-center group-hover:bg-[#88bff7] group-hover:rounded-t-[12px] duration-300"
              >
                <h1 className="text-[#242424] text-[28px] font-Montserrat font-semibold leading-[38px] text-center">
                  New Feature
                </h1>
                <p className="text-[#242424] text-[20px] font-Montserrat font-medium leading-[30px] text-center">
                Automated Dispatching
                </p>
              </div>

              <div className="px-6 py-[32px]">
                <h3 className="text-[#2B2B2B] text-[18px] text-center font-Montserrat font-normal leading-7">
                  Helping Launch a new major feature
                </h3>
              </div>
            </Link> */}
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Header;
