/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  MdArrowForwardIos,
  MdClose,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 
 


  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSlideButtonClick = (direction) => {
    const newIndex =
      direction === "next"
        ? (selectedImageIndex + 1) % images.length
        : (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  };

  return (
    <div>
      <div className="lg:w-[650px] w-full h-[416px] border-[1px] border-[#D9D9D9]  mt-14 md:mt-14 lg:mt-0">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="mb-5">
             <div className="h-[380px] w-full p-4">
             <img
                className=" object-contain w-full h-full cursor-pointer"
                src={image.image}
                alt=""
                onClick={() => handleImageClick(index)}
              />
             </div>
            
              <h1 className="text-[#2B2B2B] text-[14px] font-Montserrat font-normal leading-5  text-center">
              {image.text}
              </h1>
            </div>
          ))}
        </Slider>
      </div>






      {isModalOpen && (
        <div className="fixed top-0 z-50 left-0 w-full h-full flex justify-center  bg-[#323232] bg-opacity-95 ">
          
          <div className="lg:w-[900px] 2xl:w-[1200px] 2xl:h-[650px] h-[500px]  w-full mt-4 relative ">
           
            <div className=" lg:w-[900px] 2xl:w-[1200px] 2xl:h-[650px] w-full h-[500px] border-[6px] border-white">
              <img
                className="object-contain w-full h-full flex justify-center items-center mx-auto"
                src={images[selectedImageIndex].image}
                alt=""
              />
            </div>


            <div className=" w-full absolute inset-0 flex  items-center justify-between px-6 ">
              <span
                onClick={() => handleSlideButtonClick("prev")}
                className="bg-[#28163B] rounded-full w-7 h-7 2xl:w-10 2xl:h-10 flex justify-center items-center cursor-pointer"
              >
                <MdOutlineArrowBackIos className="text-white text-[14px] 2xl:text-[20px]" />
              </span>

              <span
                onClick={() => handleSlideButtonClick("next")}
                className="bg-[#28163B] rounded-full w-7 h-7 2xl:w-10 2xl:h-10 flex justify-center items-center cursor-pointer"
              >
                <MdArrowForwardIos className="text-white text-[14px] 2xl:text-[20px]" />
              </span>
            </div>

           
            <div className="flex justify-between items-center mt-1 2xl:mt-2">
            <div>
            <h1 className="text-white text-[16px] mt-2 font-Montserrat font-normal ">
            {images[selectedImageIndex].text}
            </h1>
            <span className="text-white text-[13px] font-normal font-Montserrat">
              Image {`${selectedImageIndex + 1} of ${images.length}`}
            </span>
            </div>
           <div>
            <span onClick={handleModalClose} className="h-8 w-8 bg-red-500 cursor-pointer flex justify-center items-center rounded-full">
            <MdClose
              
              className="text-white text-xl font-bold "
            />
            </span>
           </div>
            </div>


           



          </div>


          
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
