import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BtnNextPrev from "./BtnNextPrev";
import PersonCard from "./PersonCard";
import Tagline from "./Tagline";

const Experts = () => {
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
    <section className="experts">
      <div className="container">
        <Tagline
          title="ক্যারিয়ার গড়তে ইন্ডাস্ট্রি এক্সপার্টগন"
          icon="/images/image25.png"
        />
      </div>
      <div className="slider-section">
        <div className="btn-slider btn-prev">
          <BtnNextPrev type="prev" onClickHandler={handlePrevSlide} />
        </div>

        <div className="container slider-body">
          <Slider ref={ref} {...settings}>
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
            <PersonCard />
          </Slider>
        </div>
        <div className="btn-slider btn-next">
          <BtnNextPrev type="next" onClickHandler={handleNextSlide} />
        </div>
      </div>
    </section>
  );
};

export default Experts;
