/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import email from "../../assets/email.svg";
import doc from "../../assets/Frame 66.svg";

const Header = () => {
  return (
    <div className="max-w-container mx-auto lg:px-4 2xl:px-0  px-4 md:px-8 py-6 ">
      <div className="lg:flex justify-center lg:gap-6 2xl:gap-6">
        <div className="">
          <div className="w-full">
            <div className="w-full">
              <img
                className="w-full md:w-[600px] lg:w-[424px] 2xl:w-[424px] object-cover md:mx-auto lg:mx-0 2xl:h-[415px] lg:h-[430px] md:h-[400px] h-[350px] rounded-lg"
                src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/collections/a14009ec-3cfd-4ee1-bda6-acbd78e90f0f/t6ZGYj060JbLeYt1.png"
                alt=""
              />
            </div>
            {/* if need to scroll  h-[150px] overflow-y-scroll custom-scrollbar*/}
            <div className=" ">
              <h1 className="text-[28px] font-semibold text-[#282A2B] font-Montserrat leading-[38px] mt-7">
                Chad Smith
              </h1>
              <p className="text-[20px] font-Montserrat font-medium leading-[30px] text-[#2B2B2B] mt-1">
                Senior UX Researcher
              </p>
              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[350px] 2xl:w-[424px] text-justify leading-6">
                UX Research with focus area in advancing internal and enterprise
                systems
              </p>

              <p className="text-[#2B2B2B] text-[16px] font-Montserrat font-normal mt-4 w-full md:w-full lg:w-[350px] 2xl:w-[424px] text-justify leading-6">
                Outside of UX Research, I’m interested in web design,
                skills-based training in basketball, reading & math tutoring for
                elementary students and growing as a visual artist. Currently
                collaborating with 3D Modelers and apparel designers to build
                moderately-cost products
              </p>
            </div>
          </div>

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-start mt-5">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/chadxsmith/"
            >
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
            <a href="https://drive.google.com/file/d/16pu0ysZ4vX7aDGJGoIxZrMIfmGO83rLm/view" target="_blank">
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
          <h1 className="text-[#2B2B2B] text-[24px] font-Playfair font-semibold leading-[34px] mt-10 md:mt-12 lg:mt-0">
            Case Studies{" "}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 lg:gap-x-6 lg:gap-y-6 2xl:gap-x-6 2xl:gap-y-6 mt-[21px]">
            <Link
              to={"/details-1"}
              className="bg-[#58A942] 2xl:w-[424px] lg:w-[400px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[380px] 2xl:h-[360px] h-[360px] flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-secondaryColor duration-300"
            >
              <h1 className="text-white 2xl:text-[28px] lg:text-[28px] md:text-[36px] text-[22px] font-Montserrat font-extrabold text-center leading-[38px]">
                Driver App
              </h1>

              <p className="text-white 2xl:text-[16px] lg:text-[16px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 leading-6">
                Product Redesign
              </p>
            </Link>

            <Link
              to={"/details-2"}
              className="bg-[#F5BD4F] 2xl:w-[424px] lg:w-[400px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[380px] 2xl:h-[360px] h-[360px] flex flex-col justify-center items-center mt-5 md:mt-5 lg:mt-0 cursor-pointer rounded-lg hover:bg-secondaryColor duration-300"
            >
              <h1 className="text-white 2xl:text-[28px] lg:text-[28px] md:text-[36px] text-[22px] font-Montserrat font-extrabold text-center leading-[38px]">
                Transportation Optimizer
              </h1>

              <p className="text-white 2xl:text-[16px] lg:text-[16px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 leading-6">
                New Product
              </p>
            </Link>

            <Link
              to={"/details-3"}
              className="bg-[#87817E] 2xl:w-[424px] lg:w-[400px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[380px] 2xl:h-[360px] h-[360px] flex flex-col justify-center items-center mt-5 md:mt-5 lg:mt-0 cursor-pointer rounded-lg hover:bg-secondaryColor duration-300"
            >
              <h1 className="text-white 2xl:text-[28px] lg:text-[28px] md:text-[36px] text-[22px] font-Montserrat font-extrabold text-center leading-[38px]">
                Suggested Fuel Stops
              </h1>

              <p className="text-white 2xl:text-[16px] lg:text-[16px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 leading-6">
                New Feature
              </p>
            </Link>
          </div>

          <div className="mt-[70px]">
            <h1 className="text-[#2B2B2B] text-[24px] font-Playfair font-semibold leading-[34px]">
              UXR Techniques
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2 lg:gap-x-6 lg:gap-y-6 2xl:gap-x-6 2xl:gap-y-6 mt-5">
              <Link
                to={"/"}
                className="bg-[#064DD6] 2xl:w-[424px] lg:w-[400px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[380px] 2xl:h-[360px] h-[360px] flex flex-col justify-center items-center cursor-pointer rounded-lg hover:bg-secondaryColor duration-300"
              >
                <h1 className="text-white 2xl:text-[28px] lg:text-[28px] md:text-[36px] text-[22px] font-Montserrat font-extrabold text-center leading-[38px] px-4">
                  Co-designing Ways of Working
                </h1>

                <p className="text-white 2xl:text-[16px] lg:text-[16px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 leading-6">
                  (Coming Soon)
                </p>
              </Link>

              <Link
                to={"/"}
                className="bg-[#064DD6] 2xl:w-[424px] lg:w-[400px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[380px] 2xl:h-[360px] h-[360px] flex flex-col justify-center items-center mt-5 md:mt-5 lg:mt-0 cursor-pointer rounded-lg hover:bg-secondaryColor duration-300"
              >
                <h1 className="text-white 2xl:text-[28px] lg:text-[28px] md:text-[36px] text-[22px] font-Montserrat font-extrabold text-center leading-[38px]">
                  Remapping Workflow Experiences
                </h1>

                <p className="text-white 2xl:text-[16px] lg:text-[16px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 leading-6">
                  (Coming Soon)
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
