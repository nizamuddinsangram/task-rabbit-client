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
      {/* <div className="">
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
      </div> */}
      <>
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
            className="mySwiper h-[60vh] lg:h-[80vh]"
          >
            <SwiperSlide>
              <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
                <img
                  src={img1}
                  className="w-full h-full object-cover"
                  alt="Banner 1"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl lg:mb-4 px-4 text-center">
                    Earn Money with Simple Tasks
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl px-4 mb-4 lg:mb-6 text-center">
                    Complete small tasks in your spare time and earn extra cash.
                    It's easy and flexible!
                  </p>
                  <Link
                    to="/allTasks"
                    className="btn bg-[#138579] hover:bg-[#004437] px-6 py-2 rounded-md text-white border-none border-b-4"
                  >
                    Explore Tasks
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
                <img
                  src={img2}
                  className="w-full h-full object-cover"
                  alt="Banner 2"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl lg:mb-4 px-4 text-center">
                    Maximize Your Earnings
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl px-4 mb-4 lg:mb-6 text-center">
                    Discover how you can make the most out of your free time by
                    earning money online.
                  </p>
                  <Link
                    to="/allTasks"
                    className="btn bg-[#005149] hover:bg-[#004437] px-6 py-2 rounded-md text-white border-none border-b-4"
                  >
                    Start Earning
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
                <img
                  src={img3}
                  className="w-full h-full object-cover"
                  alt="Banner 3"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl lg:mb-4 px-4 text-center">
                    Flexible Work, Real Rewards
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl px-4 mb-4 lg:mb-6 text-center">
                    Work on your own schedule and get paid for completing simple
                    tasks from anywhere.
                  </p>
                  <Link
                    to="/allTasks"
                    className="btn bg-[#005149] hover:bg-[#004437] px-6 py-2 rounded-md text-white border-none border-b-4"
                  >
                    Find Tasks
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
                <img
                  src={img4}
                  className="w-full h-full object-cover"
                  alt="Banner 4"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl lg:mb-4 px-4 text-center">
                    Fast and Easy Payments
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl px-4 mb-4 lg:mb-6 text-center">
                    Get paid quickly and securely for every task you complete.
                    Start earning today!
                  </p>
                  <Link
                    to="/allTasks"
                    className="btn bg-[#005149] hover:bg-[#004437] px-6 py-2 rounded-md text-white border-none border-b-4"
                  >
                    Join Now
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative rounded-lg banner-image h-[60vh] lg:h-[80vh]">
                <img
                  src={img5}
                  className="w-full h-full object-cover"
                  alt="Banner 5"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="swiper-content absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl lg:mb-4 px-4 text-center">
                    Join Our Community of Earners
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl px-4 mb-4 lg:mb-6 text-center">
                    Be part of a growing community where you can earn money by
                    completing various micro-tasks.
                  </p>
                  <Link
                    to="/allTasks"
                    className="btn bg-[#005149] hover:bg-[#004437] px-6 py-2 rounded-md text-white border-none border-b-4"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </>
    </>
  );
};

export default Banner;
