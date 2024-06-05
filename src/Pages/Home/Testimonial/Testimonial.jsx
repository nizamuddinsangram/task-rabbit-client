import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Navigation, Pagination } from "swiper/modules";

const Testimonial = () => {
  const testimonials = [
    {
      photo: "https://i.ibb.co/1Gx6Gkk/main1.jpg",
      name: "John Doe",
      quote: "This is an amazing product! Highly recommend to everyone.",
    },
    {
      photo: "https://i.ibb.co/fNt89KJ/man2.jpg",
      name: "Jane Smith",
      quote:
        "Absolutely love it! Great quality and excellent customer service.",
    },
    {
      photo: "https://i.ibb.co/1Gx6Gkk/main1.jpg",
      name: "Mark Johnson",
      quote: "A wonderful experience from start to finish. Five stars!",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#f5f5f5", padding: "50px 0", color: "#333" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
        What Our Customers Say
      </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        style={{ width: "80%", margin: "0 auto" }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div style={{ textAlign: "center" }}>
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  marginBottom: "20px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <h3>{testimonial.name}</h3>
              <p
                style={{
                  fontStyle: "italic",
                  maxWidth: "600px",
                  margin: "0 auto",
                  color: "#555",
                }}
              >
                "{testimonial.quote}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
