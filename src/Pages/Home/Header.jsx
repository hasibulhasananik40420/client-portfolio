/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import doc from "../../assets/Frame 66.svg";

const Header = () => {
  return (
    <div className="max-w-container mx-auto lg:px-4 xl:px-0 2xl:px-0  px-4 md:px-8 py-6 ">
      <div className="lg:flex justify-center lg:gap-6 2xl:gap-6">
        <div className="">
          <div className="w-full">
            <div className="w-full overflow-hidden">
              <img
                className="w-full md:w-full lg:w-[424px] 2xl:w-[424px]  md:mx-auto lg:mx-0 2xl:h-[415px] lg:h-[430px] md:h-[600px] h-[350px] rounded-lg object-cover object-center transition-all duration-700 hover:scale-110"
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
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[420px] 2xl:w-[424px] text-justify leading-6">
              UX Researcher with focus area in advancing internal and enterprise
                systems for B2BA and B2C audiences.
              </p>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[420px] 2xl:w-[424px] text-justify leading-6">
                I'm currently searching for roles focused on growing a user base and measuring & improving user behavior against defined business goals.
              </p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[420px] 2xl:w-[424px] text-justify leading-6">
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
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 lg:ml-6 ml-0 lg:mt-0 md:mt-10 mt-10">

            <Link to={"/driver-app"}
              className="xl:w-[400px] lg:w-[360px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group  hover:border-[#88bff7] hover:cursor-pointer duration-300"
              style={{ boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)" }}
            >
              <div
                
                className="bg-[#F9FAFB] h-[320px] p-6 flex flex-col gap-2 justify-center items-center group-hover:bg-[#88bff7] group-hover:rounded-t-[12px] duration-300"
              >
                <h1 className="text-[#242424] text-[28px] font-Montserrat font-semibold leading-[38px] text-center">
                  Product Redesign{" "}
                </h1>
                <p className="text-[#242424] text-[20px] font-Montserrat font-medium leading-[30px] text-center">
                  Driver App
                </p>
              </div>

              <div className="px-6 py-[32px]">
                <h3 className="text-[#2B2B2B] text-[18px] text-center font-Montserrat font-normal leading-7">
                 Redesigning an internal application
                </h3>
              </div>
            </Link>



            <Link  to={"/fuel-stops"}
              className="xl:w-[400px] lg:w-[360px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group hover:border-[#88bff7] hover:cursor-pointer duration-300"
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
            </Link>

            <Link to={"/automated-equipment-dispatching"}
              className="xl:w-[400px] lg:w-[360px] w-full rounded-[12px] border-[1px] border-[#EAECF0] group hover:border-[#88bff7] hover:cursor-pointer duration-300"
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
            </Link>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default Header;
