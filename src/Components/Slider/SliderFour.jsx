
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { MdArrowForwardIos, MdClose, MdOutlineArrowBackIos } from "react-icons/md";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
import image4 from "../../assets/Slider4.png";

const SliderFour = () => {

    const images = [
      image4,
      image2,
      image4,
      image2
      ];
    
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
      direction === 'next'
        ? (selectedImageIndex + 1) % images.length
        : (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  };


  return (
    <div>
      <div className='lg:w-[560px] w-full h-[416px] relative mt-14 md:mt-14 lg:mt-0'>
        <div className="lg:w-[560px] w-full border-none outline-none ">
          <img
            className="object-cover lg:w-[560px] w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none cursor-pointer"
            src={images[selectedImageIndex]}
            alt=""
            onClick={() => handleImageClick(selectedImageIndex)}
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 z-50 left-0 w-full h-full flex justify-center items-center bg-[#323232] bg-opacity-95">
          <div className="lg:w-[560px] w-full md:px-4 lg:mx-0 mx-0">
          <MdClose onClick={handleModalClose} className='text-white text-3xl font-bold cursor-pointer mb-1 lg:ml-[-10px] md:ml-0 ml-0'/>
            <div className=" w-full border-[6px] border-white ">
              <img
                className=" w-full h-[416px] flex justify-center items-center mx-auto"
                src={images[selectedImageIndex]}
                alt=""
              />
              
            </div>
             

            <div className="absolute inset-0 flex  items-center justify-between mx-auto lg:w-[500px] w-full px-4 md:px-8 lg:px-0">
                
                <span onClick={() => handleSlideButtonClick('prev')} className='bg-[#28163B] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'><MdOutlineArrowBackIos  className='text-white' /></span>

                <span onClick={() => handleSlideButtonClick('next')} className='bg-[#28163B] rounded-full w-10 h-10 flex justify-center items-center cursor-pointer'><MdArrowForwardIos className='text-white' /></span>

              </div>
               <h1 className='text-white text-[16px] mt-2 font-Montserrat font-normal '>Click the right half of the image to move forward.</h1>
              <span className='text-white text-[13px] font-normal font-Montserrat'>Image {`${selectedImageIndex + 1} of ${images.length}`}</span>
             
          </div>
        </div>
      )}
    </div>











  )
}

export default SliderFour

