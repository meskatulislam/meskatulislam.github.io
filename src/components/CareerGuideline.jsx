import React, { useRef } from "react";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BtnNextPrev from "./BtnNextPrev";
import CareerGuidelineCard from "./CareerGuidelineCard";

const CareerGuideline = () => {
  const ref = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
  };
  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };
  return (
    <section className="guideline">
      <div className="container">
        <div className="slider-head">
          <img src="/images/image17.png" alt="" />
          <p>এক্সপার্টদের ক্যারিয়ার গাইডলাইন</p>
        </div>
      </div>
      <div className="slider-section">
        <div className="btn-slider btn-prev">
          <BtnNextPrev type="prev" onClickHandler={handlePrevSlide} />
        </div>

        <div className="container slider-body">
          <Slider ref={ref} {...settings}>
            <CareerGuidelineCard
              title="ক্যারিয়ার করুন ওয়েব ডিজাইনে"
              instructor="Instructor name"
              field="Expertise field name"
              banner="/images/aws1.png"
              img="/images/instructor1.png"
            />
            <CareerGuidelineCard
              title="ক্যারিয়ার করুন ওয়েব ডিজাইনে"
              instructor="Instructor name"
              field="Expertise field name"
              banner="/images/aws1.png"
              img="/images/instructor1.png"
            />
            <CareerGuidelineCard
              title="ক্যারিয়ার করুন ওয়েব ডিজাইনে"
              instructor="Instructor name"
              field="Expertise field name"
              banner="/images/aws1.png"
              img="/images/instructor1.png"
            />
            <CareerGuidelineCard
              title="ক্যারিয়ার করুন ওয়েব ডিজাইনে"
              instructor="Instructor name"
              field="Expertise field name"
              banner="/images/aws1.png"
              img="/images/instructor1.png"
            />
            <CareerGuidelineCard
              title="ক্যারিয়ার করুন ওয়েব ডিজাইনে"
              instructor="Instructor name"
              field="Expertise field name"
              banner="/images/aws1.png"
              img="/images/instructor1.png"
            />
            <CareerGuidelineCard
              title="ক্যারিয়ার করুন ওয়েব ডিজাইনে"
              instructor="Instructor name"
              field="Expertise field name"
              banner="/images/aws1.png"
              img="/images/instructor1.png"
            />
          </Slider>
        </div>
        <div className="btn-slider btn-next">
          <BtnNextPrev type="next" onClickHandler={handleNextSlide} />
        </div>
      </div>
    </section>
  );
};

export default CareerGuideline;
