import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import line from '../../assets/Browser toolbar.png'
import image1 from '../../assets/slide1.png'
import image2 from '../../assets/slide2.png'

const SliderThree = () => {
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

            <div className="outline-none border-none bg-[#F6EFFF] lg:w-[560px] w-full h-[416px] mb-2" style={{borderRadius:'0px 0px 8px 8px'}}>
                 <img className="lg:w-[560px] w-full" src={line} alt="" />
                  <div className="pt-6">
                  <img className="lg:w-[512px] w-full h-[340px] flex justify-center items-center mx-auto outline-none border-none" src={image1} alt="" />
                  </div>
            </div>  
            
            
 <div className="outline-none border-none bg-[#F6EFFF] w-[560px] h-[416px]" style={{borderRadius:'0px 0px 8px 8px'}}>
                 <img className="w-[560px]" src={line} alt="" />
                  <div className="pt-6">
                  <img className="w-[512px] h-[340px] flex justify-center items-center mx-auto outline-none border-none" src={image2} alt="" />
                  </div>
            </div>  
            
            
 <div className="outline-none border-none bg-[#F6EFFF] w-[560px] h-[416px]" style={{borderRadius:'0px 0px 8px 8px'}}>
                 <img className="w-[560px]" src={line} alt="" />
                  <div className="pt-6">
                  <img className="w-[512px] h-[340px] flex justify-center items-center mx-auto outline-none border-none" src={image1} alt="" />
                  </div>
            </div>  
            
            

          </Slider>
    </div>
  )
}

export default SliderThree