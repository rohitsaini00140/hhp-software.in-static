"use client"

import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {

  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 590,
        settings: {
          dots: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          pauseOnHover: true,
        }
      }
    ]
  };

  return (
    <section className="dark:bg-bg-color-dark bg-white relative z-10 py-10 md:py-10 lg:py-14">
      <div className="container">
        <SectionTitle
          title="What Our Clients Says"
          paragraph=""
          center
          mb="100px"
        />
        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;