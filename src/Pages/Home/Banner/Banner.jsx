// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/image1.jpg";
import img5 from "../../../assets/image4.jpg";
import img3 from "../../../assets/istockphoto-1175076899-2048x2048.jpg";
import img4 from "../../../assets/istockphoto-944799864-2048x2048.jpg";
import img2 from "../../../assets/money1.jpg";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[60vh]  lg:h-[80vh]"
        >
          <SwiperSlide>
            <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
              <img src={img1} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl lg:mb-4 px-4 text-center">
                  Discover Culinary Delights with Bengali Delights
                </h1>
                <p className="text-base sm:text-lg lg:text-xl px-4 mb-4 lg:mb-6 text-center">
                  Explore a world of flavors, from savory classics to exotic
                  delicacies. Join us on a gastronomic journey like no other!
                </p>
                <Link
                  to="/allFood"
                  className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white border-none border-b-4"
                >
                  Explore All Foods
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
              <img src={img2} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl lg:mb-4 px-4 text-center">
                  Discover Culinary Delights with Bengali Delights
                </h1>
                <p className="text-base sm:text-lg lg:text-xl px-4 mb-4 lg:mb-6 text-center">
                  Explore a world of flavors, from savory classics to exotic
                  delicacies. Join us on a gastronomic journey like no other!
                </p>
                <Link
                  to="/allFood"
                  className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white border-none border-b-4"
                >
                  Explore All Foods
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
              <img src={img3} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl lg:mb-4 px-4 text-center">
                  Discover Culinary Delights with Bengali Delights
                </h1>
                <p className="text-base sm:text-lg lg:text-xl px-4 mb-4 lg:mb-6 text-center">
                  Explore a world of flavors, from savory classics to exotic
                  delicacies. Join us on a gastronomic journey like no other!
                </p>
                <Link
                  to="/allFood"
                  className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white border-none border-b-4"
                >
                  Explore All Foods
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
              <img src={img4} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl lg:mb-4 px-4 text-center">
                  Discover Culinary Delights with Bengali Delights
                </h1>
                <p className="text-base sm:text-lg lg:text-xl px-4 mb-4 lg:mb-6 text-center">
                  Explore a world of flavors, from savory classics to exotic
                  delicacies. Join us on a gastronomic journey like no other!
                </p>
                <Link
                  to="/allFood"
                  className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white border-none border-b-4"
                >
                  Explore All Foods
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
              <img src={img5} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                <h1 className="text-2xl sm:text-xl md:text-4xl lg:text-5xl lg:mb-4 px-4 text-center">
                  Discover Culinary Delights with Bengali Delights
                </h1>
                <p className="text-base sm:text-lg lg:text-xl px-4 mb-4 lg:mb-6 text-center">
                  Explore a world of flavors, from savory classics to exotic
                  delicacies. Join us on a gastronomic journey like no other!
                </p>
                <Link
                  to="/allFood"
                  className="btn bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-md text-white border-none border-b-4"
                >
                  Explore All Foods
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
