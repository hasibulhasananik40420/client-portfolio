import Slider from "react-slick";
import image1 from "../../assets/slide1.png";
import image2 from "../../assets/slide2.png";
import line from "../../assets/Browser toolbar.png";

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
        <div
          className="outline-none border-none bg-[#F6EFFF] lg:w-[560px] w-full h-[416px]"
          style={{ borderRadius: "0px 0px 8px 8px" }}
        >
          <img className="lg:w-[560px] w-full" src={line} alt="" />
          <div className="pt-6">
            <img
              className="lg:w-[512px] w-full h-[340px] flex justify-center items-center mx-auto outline-none border-none"
              src={image2}
              alt=""
            />
          </div>
        </div>

        <div
          className="outline-none border-none bg-[#F6EFFF] lg:w-[560px] w-full h-[416px]"
          style={{ borderRadius: "0px 0px 8px 8px" }}
        >
          <img className="lg:w-[560px] w-full" src={line} alt="" />
          <div className="pt-6">
            <img
              className="lg:w-[512px] w-full h-[340px] flex justify-center items-center mx-auto outline-none border-none"
              src={image1}
              alt=""
            />
          </div>
        </div>

        <div
          className="outline-none border-none bg-[#F6EFFF] lg:w-[560px] w-full h-[416px]"
          style={{ borderRadius: "0px 0px 8px 8px" }}
        >
          <img className="lg:w-[560px] w-full" src={line} alt="" />
          <div className="pt-6">
            <img
              className="lg:w-[512px] w-full h-[340px] flex justify-center items-center mx-auto outline-none border-none"
              src={image2}
              alt=""
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderTwo;
