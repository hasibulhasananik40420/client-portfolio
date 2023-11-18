import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";

const SliderOne = () => {
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
       

         <div className="lg:w-[512px] w-full">
         <img
              className="object-contain w-full h-[416px] border flex justify-center items-center mx-auto outline-none border-none"
              src={image1}
              alt=""
            />
         </div>

         <div className="lg:w-[512px] w-full">
         <img
              className="object-contain w-full h-[416px] border flex justify-center items-center mx-auto outline-none border-none"
              src={image2}
              alt=""
            />
         </div>

         <div className="lg:w-[512px] w-full">
         <img
              className="object-contain w-full h-[416px] border flex justify-center items-center mx-auto outline-none border-none"
              src={image2}
              alt=""
            />
         </div>

        

       
      </Slider>
    </div>
  );
};

export default SliderOne;
