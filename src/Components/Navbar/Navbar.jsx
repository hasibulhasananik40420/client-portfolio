/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {

  return (
      // ******************* navbar part start here *******************
    <div className=" h-[70px] 2xl:h-[86px] bg-white " >
      <div style={{ boxShadow: "0px 4px 45px 0px rgba(181, 179, 179, 0.30)" }}
        className="fixed top-0 left-0 right-0 z-30  bg-white  lg:px-8   2xl:px-8 px-4 md:px-8 lg:block 2xl:block hidden"
        
      >
        <div className="flex justify-between items-center h-[70px] 2xl:h-[86px] max-w-container mx-auto">
          <div>
            {/* <img className="h-[45px] w-[128px]" src={logo} alt="" /> */}
            logo
          </div>

          <div className="flex flex-row 2xl:gap-20 lg:gap-12 items-center">
          
            <div className="relative group">
              <Link
                to={"/"}
                className="inline-flex relative text-[#504594] font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Home
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>


            </div>




          



       



            <div className="relative group">
              <div
                className="inline-flex relative text-[#504594] font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group-hover:text-secondaryColor duration-500"
              >
                Blogs
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </div>
             

            
            

           
          </div>

           <div>
           <Link to={"/contact-us"}>
              <span className="inline-flex relative text-[#504594] font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden  group hover:text-secondaryColor duration-500">
                Contacts
                <span className="absolute w-full h-[2px] bg-secondaryColor left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </Link>
           </div>

           <button className="w-[170px] h-[56px]  rounded-[60px] bg-secondaryColor text-white text-[20px] font-Lato hover:bg-primary duration-500 transform ease-in-out">
              Get Started
            </button>





        </div>
      </div>
      </div>

      <div className="2xl:hidden lg:hidden block fixed top-0 left-0 right-0 z-10 bg-[#331949]">
        <MobileMenu />
      </div>
    </div>
     // ******************* navbar part end here *******************
  );
};

export default Navbar;
