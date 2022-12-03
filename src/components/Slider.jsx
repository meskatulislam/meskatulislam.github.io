import React from "react";
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner from "./Banner";

const Slider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="banner">
      <ReactSlider {...settings}>
        <Banner
          title="Tech and development"
          icon="/images/banner-icon-1.png"
          banner="images/banner1.jpeg"
          numOfCourse="৭"
          numOfGraduates="৪২৪৫"
          description="স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।"
        />
        <Banner
          title="Higher Studies"
          icon="/images/banner-icon-2.png"
          banner="images/banner2.jpeg"
          numOfCourse="৭"
          numOfGraduates="৪২৪৫"
          description="স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।"
        />
      </ReactSlider>
    </section>
  );
};

export default Slider;
