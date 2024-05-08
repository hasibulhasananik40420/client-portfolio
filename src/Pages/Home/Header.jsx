/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import doc from "../../assets/Frame 66.svg";
import React from "react";
import chad2 from "../../assets/chad2.png";

const Header = () => {
  const products = [
    {
      _id: 1,
      title: "Product Redesign",
      subTitle: "Driver App",
      para: "Redesigning an internal application",
      link: "/driver-application",
    },

    {
      _id: 2,
      title: "New Feature",
      subTitle: "Suggested Fuel Stops",
      para: " Pinpointing opportunities to recommend fueling stations",
      link: "/suggested-fuel-stops",
    },

    {
      _id: 3,
      title: " New Feature",
      subTitle: "Automated Dispatching",
      para: "Helping launch a new major feature",
      link: "/automated-dispatching",
    },
  ];

  return (
    <div className="max-w-container mx-auto lg:px-[140px] xl:px-[140px] 2xl:px-0  px-4 md:px-8 py-6 ">
      <div className="lg:flex justify-center lg:gap-6 2xl:gap-6">
        <div className="">
          <div className="w-full">
            <div className="lg:w-[330px] xl:w-[339px] 2xl:w-[339px] rounded-lg md:mx-auto lg:mx-0 2xl:h-[330px] lg:h-[330px] xl:h-[330px] md:h-[600px] h-[396px]">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={chad2}
                alt=""
              />
            </div>

            <div className=" ">
              <h1 className="2xl:text-[28px] lg:text-[24px] xl:text-[24px] text-[28px] md:text-[28px]  font-semibold text-[#2B2B2B] font-Montserrat  mt-7">
                Chad Smith
              </h1>
              <div className="">
                <p className="2xl:text-[16px] xl:text-[16px] lg:text-[16px] text-[16px] md:text-[20px] font-Montserrat font-medium leading-[30px] text-[#2B2B2B] mt-1">
                  Senior UX Researcher
                </p>
                <p className="text-[#2B2B2B] 2xl:text-[12px] lg:text-[12px] xl:text-[12px] text-[14px] md:text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[335px] xl:w-[339px] 2xl:w-[339px]">
                UX Researcher with extensive experience using discovery and evaluative research methods. Searching for researcher roles on zero to one projects.
                </p>

                <p className="text-[#2B2B2B] 2xl:text-[12px] lg:text-[12px] xl:text-[12px] text-[14px] md:text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[335px] xl:w-[339px] 2xl:w-[339px]">
                I am also currently enrolled in certification programs to extend my survey design and statistical analysis skills.
                </p>
                
              </div>
            </div>
          </div>

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-start mt-7">
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
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 2xl:gap-[22px] xl:gap-[22px] lg:gap-[24px] gap-10 2xl:ml-0 xl:ml-0 lg:ml-0 ml-0 lg:mt-0 md:mt-10 mt-10">
            {products?.map((product) => (
              <React.Fragment key={product._id}>
              
              
              
                <Link
                  to={product?.link}
                  className="2xl:w-[300px] xl:w-[300px] lg:w-[280px] w-full rounded-[12px] border-[1px] border-[#D0D0D0] group hover:border-[#88bff7] hover:cursor-pointer duration-300"
                  style={{
                    boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                  }}
                >
                  <div className="bg-[#E9ECEF] rounded-t-[12px] 2xl:h-[260px] xl:h-[260px] lg:h-[260px] md:h-[320px] h-[320px] p-6 flex flex-col gap-2 justify-center items-center group-hover:bg-[#88bff7] duration-300 group-hover:rounded-t-[10px]">
                   
                   
                    <h1 className="text-[#242424] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[28px] text-[28px] font-Montserrat font-semibold 2xl:leading-5 xl:leading-5 text-center">
                      {product?.title}
                    </h1>
                    <p className="text-[#242424] 2xl:text-[13px] xl:text-[13px] lg:text-[13px] md:text-[20px] text-[20px] font-Montserrat font-medium leading-[30px] text-center">
                      {product?.subTitle}
                    </p>
                  </div>

                  <div className="px-6 2xl:py-[20px] xl:py-[20px] lg:py-[20px] md:py-[32px] py-[32px]">
                    <h3 className="text-[#2B2B2B] 2xl:text-[12px] xl:text-[12px] lg:text-[12px] md:text-[18px] text-[18px] text-center font-Montserrat font-normal">
                      {product?.para}
                    </h3>
                  </div>
                </Link>


                
              </React.Fragment>
            ))}

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
