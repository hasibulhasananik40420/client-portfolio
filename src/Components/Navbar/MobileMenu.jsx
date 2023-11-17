import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const MobileMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <div >
      <div className="flex justify-end 2xl:px-0 px-4 md:px-8">
        

        <div className="pb-3">
          <CiMenuFries
            onClick={() => setShow(true)}
            className="text-3xl text-black cursor-pointer"
          />
        </div>
      </div>

      {show && (
        <>
          <div className="absolute  top-0 right-0 w-full h-screen  flex flex-col items-start">
            <div className="w-[100%] h-full  bg-[#112240] flex flex-col z-50 relative pt-20 px-8 md:px-12 pb-6">
              <IoMdClose
                onClick={() => setShow(false)}
                className="text-3xl cursor-pointer text-red-500 fixed top-4 right-4 duration-300"
              />

              {/*********************  section *********************/}

              <div className="flex flex-col gap-3">
              <div className=" w-full h-12 p-3 bg-secondaryColor cursor-pointer">
                <div>
                  <span className="inline-flex  relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Home
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>
              </div>
              
              <div className=" w-full h-12 p-3 bg-secondaryColor cursor-pointer">
                <div>
                  <span className="inline-flex  relative text-white font-Lato text-[20px] font-normal cursor-pointer h-7 overflow-x-hidden overflow-y-hidden group duration-500">
                    Blogs
                    <span className="absolute w-full h-[2px] bg-primary left-0 bottom-0 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
                  </span>
                </div>
              </div>

              </div>




            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
