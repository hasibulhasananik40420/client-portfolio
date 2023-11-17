import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="max-w-container mx-auto lg:px-4  px-4 md:px-8 py-10">
      <div className="lg:flex justify-center gap-6">
        
        <div className="">
        <div className="w-full md:w-[600px] lg:w-[320px] md:mx-auto lg:mx-0">
           {/* <div className="lg:hidden block"> <MobileMenu/></div> */}
          <img
            className="w-full md:w-[600px] md:mx-auto lg:mx-0 lg:w-[320px] lg:h-[360px] md:h-[400px] h-[350px]"
            src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/collections/a14009ec-3cfd-4ee1-bda6-acbd78e90f0f/t6ZGYj060JbLeYt1.png"
            alt=""
          />

           <div className=" h-[150px] overflow-y-scroll custom-scrollbar">
           <h1 className="text-[32px] font-bold text-[#282A2B] font-Montserrat mt-4">
            Chad Smith
          </h1>
          <p className="text-[14px] font-Montserrat font-normal text-[#282A2B]">
            Senior UX Researcher
          </p>
          <p className="text-[#2f3031] text-[14px] font-Montserrat font-normal mt-2 w-full md:w-full lg:w-[300px] leading-5">
          Senior UX Researcher with extensive experience working with leadership and delivery teams to define and improve user experience opportunities. Past experience includes working in embedded & staff augmentation capacities for evaluative research, as well as leading generative research efforts in leadership capacities
          </p>
           </div>
        </div>

          {/********************** socal media icon start here *************************/}

          <div className="flex gap-5 justify-start mt-5">
             

             <span className="w-[30px] h-[30px] flex justify-center items-center bg-white border rounded-full hover:bg-secondaryColor duration-500 transform ease-in-out hover:translate-y-2 cursor-pointer">
               <FaLinkedinIn className="text-[#282A2B] text-[16px] hover:text-white" />
             </span>

            
             
           </div>

           {/********************** socal media icon end here *************************/}
          
           <button className="text-[#282A2B] text-[16px] font-Montserrat font-bold mt-5">
            WORK
         </button>
        </div>


         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 lg:ml-5 md:ml-0 ml-0 mt-10 md:mt-12 lg:mt-0">
          
          <Link to={'/details-1'} className="bg-[#4030E8] 2xl:w-[500px] lg:w-[440px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[420px] h-[380px] flex flex-col justify-center items-center cursor-pointer hover:bg-secondaryColor duration-300">
              <h1 className="text-white 2xl:text-[32px] lg:text-[29px] md:text-[36px] text-[22px] font-Montserrat font-extrabold px-4 text-center">Kimberly-Clark Professional</h1>
              
              <p className="text-white 2xl:text-[20px] lg:text-[18px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 lg:w-[400px] md:w-[450px] w-full px-4 md:px-0">UX Research Lead-Evaluactive Research Workingshop Facilitation, Concept Testing</p>
         </Link> 
         
          <Link to={'/details-2'} className="bg-[#06D6A0] 2xl:w-[500px] lg:w-[440px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[420px] h-[380px] flex flex-col justify-center items-center cursor-pointer hover:bg-secondaryColor duration-300">
              <h1 className="text-white 2xl:text-[32px] lg:text-[29px] md:text-[36px] text-[22px] font-Montserrat font-extrabold px-4 text-center">Montgomery County Social Services</h1>
              
              <p className="text-white 2xl:text-[20px] lg:text-[18px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 lg:w-[400px] md:w-[450px] w-full px-4 md:px-0">UX Research Lead-Evaluactive Research Workingshop Facilitation, Concept Testing</p>
         </Link> 


          <Link to={'/details-3'} className="bg-[#0b1218] 2xl:w-[500px] lg:w-[440px] md:w-[600px] md:mx-auto lg:mx-0 w-full md:h-[460px] lg:h-[420px] h-[380px] flex flex-col justify-center items-center cursor-pointer hover:bg-secondaryColor duration-300">
              <h1 className="text-white 2xl:text-[32px] lg:text-[29px] md:text-[36px] text-[22px] font-Montserrat font-extrabold px-4 text-center">New Feature</h1>
              
              <p className="text-white 2xl:text-[20px] lg:text-[18px] md:text-[22px] text-[14px] font-Montserrat font-medium text-center mt-6 lg:w-[400px] md:w-[450px] w-full px-4 md:px-0">Suggested Fuel Stops
</p>
         </Link> 
         
         </div>

        
        
      </div>
    </div>
  );
};

export default Header;
