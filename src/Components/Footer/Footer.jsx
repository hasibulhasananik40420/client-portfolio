import { Link, useLocation } from "react-router-dom";
import chad from "../../assets/chad.png";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div className="bg-[#F3F7F8] md:h-[200px] h-full w-full mt-24">
      <div className="max-w-containerX mx-auto md:flex md:items-center md:gap-32 px-4 md:px-8 lg:px-4 py-16 md:py-12">
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

          {pathname === "/transportation-optimizer" ? (
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
              <Link to={'/transportation-optimizer'} className="flex cursor-pointer mt-3">
                <div className="w-16 h-14 bg-[#06D6A0]"></div>
                <div className="h-14 bg-white shadow w-[280px] px-6 py-[6px]">
                  <h1 className="text-[16px] text-[#2B2B2B] font-Montserrat font-medium mt-2">
                    {" "}
                    Transportation Optimizer
                  </h1>
                </div>
              </Link>
            </>
          ) :
           (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
