/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  MdArrowForwardIos,
  MdClose,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
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
      <div className="lg:w-[560px] w-full h-[416px] border-[1px] border-[#D9D9D9] relative mt-14 md:mt-14 lg:mt-0 ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="lg:w-[560px] w-full h-[425px]">
              <img
                className="object-contain lg:w-[560px] w-full h-[340px] p-4 flex justify-center items-center mx-auto outline-none border-none cursor-pointer"
                src={image.image}
                alt=""
                onClick={() => handleImageClick(index)}
              />
              <h1 className="text-[#2B2B2B] text-[14px] font-Montserrat font-normal leading-5 mt-4 text-center">
              {image.text}
              </h1>
            </div>
          ))}
        </Slider>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 z-50 left-0 w-full h-full flex justify-center items-center bg-[#323232] bg-opacity-95">
          <div className="lg:w-[560px] w-full md:px-4 lg:mx-0 mx-0">
           
            <div className=" w-full border-[6px] border-white">
              <img
                className=" w-full h-[416px] flex justify-center items-center mx-auto"
                src={images[selectedImageIndex].image}
                alt=""
              />
            </div>

            <div className="absolute inset-0 flex  items-center justify-between mx-auto lg:w-[500px] w-full px-4 md:px-8 lg:px-0">
              <span
                onClick={() => handleSlideButtonClick("prev")}
                className="bg-[#28163B] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
              >
                <MdOutlineArrowBackIos className="text-white" />
              </span>

              <span
                onClick={() => handleSlideButtonClick("next")}
                className="bg-[#28163B] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer"
              >
                <MdArrowForwardIos className="text-white" />
              </span>
            </div>
            <div className="flex justify-between items-center">
            <div>
            <h1 className="text-white text-[16px] mt-2 font-Montserrat font-normal ">
            {images[selectedImageIndex].text}
            </h1>
            <span className="text-white text-[13px] font-normal font-Montserrat">
              Image {`${selectedImageIndex + 1} of ${images.length}`}
            </span>
            </div>
           <div>
           <MdClose
              onClick={handleModalClose}
              className="text-white text-3xl font-bold cursor-pointer hover:text-red-500 duration-300"
            />
           </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
