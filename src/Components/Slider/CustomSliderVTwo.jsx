import PanelDiscussionImage1 from "../../assets/Automated Dispatching/Panel Discussion for Day-in-the-Life/A Day In The Life_ Panel Discussion.png"


/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import {
  MdArrowForwardIos,
  MdClose,
  MdOutlineArrowBackIos,
} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowsFullscreen } from "react-icons/bs";

const CustomSliderVTwo = ({ images, initialActiveIndex = 0 }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialActiveIndex,
    afterChange: (index) => setSelectedImageIndex(index), // Update selectedImageIndex when slide changes
  };

  const [selectedImageIndex, setSelectedImageIndex] = useState(initialActiveIndex);
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

  // const handleOverlayClick = (e) => {
  //   if (e.target.classList.contains("modal-overlay")) {
  //     handleModalClose();
  //   }
  // };

  return (
    <div>
     

<div className={`relative lg:w-[800px] xl:w-[800px] 2xl:w-[950px] w-full border-[1px] border-[#D9D9D9] mt-14 md:mt-14 lg:mt-4 mb-10 ${images.some(image => image.image === PanelDiscussionImage1) ? 'h-[790px]' : 'h-[600px]'}`}>
    <Slider className="" ref={sliderRef} {...settings}>
        {images.map((image, index) => (
            <div key={index} className="mb-[10px]">
                <div className={`w-full p-4 ${image.image === PanelDiscussionImage1 ? 'h-[780px]' : 'h-[590px]'}`}>
                    <img
                        className="object-contain w-full h-full"
                        src={image.image}
                        alt=""
                        onClick={() => handleImageClick(index)}
                        style={image.image === PanelDiscussionImage1 ? { } : {}}
                    />
                </div>
            </div>
        ))}
    </Slider>



        {images.length > 1 && (
          <div className="w-full absolute top-[47%] flex items-center justify-between px-6">
            <span
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-[#28163B] rounded-full w-7 h-7 2xl:w-7 2xl:h-7 flex justify-center items-center cursor-pointer"
            >
              <MdOutlineArrowBackIos className="text-white text-[14px] 2xl:text-[14px]" />
            </span>

            <span
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-[#28163B] rounded-full w-7 h-7 2xl:w-7 2xl:h-7 flex justify-center items-center cursor-pointer"
            >
              <MdArrowForwardIos className="text-white text-[14px] 2xl:text-[14px]" />
            </span>
          </div>
        )}

        <span
          className="bg-white absolute bottom-[20px] flex justify-center items-center ml-5"
          style={{ zIndex: 50 }}
        >
          <BsArrowsFullscreen
            onClick={() => handleImageClick(selectedImageIndex)}
            className="text-[24px] cursor-pointer"
          />
        </span>
      </div>

      {isModalOpen && (
        <div
          
          className="fixed top-0 z-50 left-0 w-full h-full flex justify-center bg-[#323232] bg-opacity-95 modal-overlay"
        >
          <div className="lg:w-[900px] 2xl:w-[900px] 2xl:h-[500px] h-[500px] w-full mt-4 relative">
            <div className="lg:w-[900px] 2xl:w-[900px] 2xl:h-[500px] w-full h-[500px] border-[6px] border-white">
              <img
                className="object-contain w-full h-full flex justify-center items-center mx-auto"
                src={images[selectedImageIndex].image}
                alt=""
              />
            </div>

            {images.length > 1 && (
              <div className="w-full absolute inset-0 flex items-center justify-between px-6">
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
            )}

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
                <span
                  onClick={handleModalClose}
                  className="h-8 w-8 bg-red-500 cursor-pointer flex justify-center items-center rounded-full"
                >
                  <MdClose className="text-white text-xl font-bold" />
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSliderVTwo;


