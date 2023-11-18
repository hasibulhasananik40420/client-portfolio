import Slider from "react-slick";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";

const SliderTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Slider {...settings} className="">
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

       

        
      </Slider>
    </div>
  );
};

export default SliderTwo;
