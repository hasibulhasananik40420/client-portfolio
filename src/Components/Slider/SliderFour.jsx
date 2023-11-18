import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
import image4 from "../../assets/Slider4.png";

const SliderFour = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1, // Adjust the number of slides to show at a time
    slidesToScroll: 1, // Adjust the number of slides to scroll
    autoplay: false,

    autoplaySpeed: 5000, // Adjust the autoplay speed in milliseconds
  };
  return (
    <div className=" mt-10 md:mt-10 lg:mt-0">
      <Slider {...sliderSettings}>
      <div className="lg:w-[512px] w-full border-none outline-none">
         <img
              className="object-contain w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none"
              src={image4}
              alt=""
            />
         </div>

         <div className="lg:w-[512px] w-full border-none outline-none">
         <img
              className="object-contain w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none"
              src={image2}
              alt=""
            />
         </div>

         <div className="lg:w-[512px] w-full border-none outline-none">
         <img
              className="object-contain w-full h-[416px]  flex justify-center items-center mx-auto outline-none border-none"
              src={image1}
              alt=""
            />
         </div>
      </Slider>
    </div>
  );
};

export default SliderFour;





// import React, { useState } from "react";
// import Modal from "react-modal";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import image1 from "../../assets/slide1.png";
// import image2 from "../../assets/slide2.png";
// import image4 from "../../assets/Slider4.png";

// const SliderFour = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 5000,
//   };

//   const openModal = (image) => {
//     setSelectedImage(image);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedImage(null);
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="mt-10 md:mt-10 lg:mt-0">
//       <Slider {...sliderSettings}>
//         <div
//           className="lg:w-[512px] w-full border-none outline-none"
//           onClick={() => openModal(image4)}
//         >
//           <img
//             className="object-contain w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none"
//             src={image4}
//             alt=""
//           />
//         </div>

//         <div
//           className="lg:w-[512px] w-full border-none outline-none"
//           onClick={() => openModal(image2)}
//         >
//           <img
//             className="object-contain w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none"
//             src={image2}
//             alt=""
//           />
//         </div>

//         <div
//           className="lg:w-[512px] w-full border-none outline-none"
//           onClick={() => openModal(image1)}
//         >
//           <img
//             className="object-contain w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none"
//             src={image1}
//             alt=""
//           />
//         </div>
//       </Slider>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Image Modal"
//       >
//         <button onClick={closeModal}>x</button>
//         {selectedImage && (
//           <img
//             src={selectedImage}
//             alt=""
//             className="object-contain w-full h-full"
//           />
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default SliderFour;



