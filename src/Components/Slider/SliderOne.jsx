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
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: false,

    autoplaySpeed: 5000, 
  };
  return (
    <div className=" mt-10 md:mt-10 lg:mt-0">
  
      <Slider {...sliderSettings}>
       

         <div className="lg:w-[512px] w-full border-none outline-none">
         <img
              className="object-contain w-full h-[416px] flex justify-center items-center mx-auto outline-none border-none"
              src={image1}
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
              src={image2}
              alt=""
            />
         </div>

        

       
      </Slider>
    </div>
  );
};

export default SliderOne;

