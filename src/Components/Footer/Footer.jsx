import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#F3F7F8] md:h-[200px] h-full w-full mt-24">
    <div className="max-w-6xl mx-auto md:flex md:items-center md:gap-32 px-4 md:px-8 lg:px-4 py-16 md:py-0">
      <div className="flex items-center gap-3 md:h-[200px] h-full">
      <div>
        <Link to={'/'}>  <img
           className="w-[60px] h-[60px] rounded-full"
           src="https://storage.googleapis.com/uxfolio/607dc3b2df0244000305af9b/intro-2x_ROY.png"
           alt=""
         /></Link>
       </div>
       <div>
         <h1 className="text-[20px] text-black font-semibold font-Montserrat">
           Chad
         </h1>
         <h1 className="text-[12px] text-black font-normal font-Montserrat">
            Senior UX Researcher
         </h1>
       </div>
      </div>


       <div className="mt-14 md:mt-0">
         <h1 className="text-[18px] text-gray-500 font-Montserrat font-semibold">SEE MORE OF MY WORK:</h1>
         <h1 className="text-[18px] text-black font-Montserrat font-semibold mt-6">Kimberly-Clark Professional
</h1>
       </div>
     </div>
   </div>
  )
}

export default Footer