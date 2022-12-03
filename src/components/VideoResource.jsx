import React, { useRef } from "react";
import Tagline from "./Tagline";
// Import css files
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BtnNextPrev from "./BtnNextPrev";
import VideoCard from "./VideoCard";

const VideoResource = () => {
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
    <section className="video-resources">
      <div className="container">
        <Tagline title="ফ্রি ভিডিও রিসোর্স" icon="/images/image22.png" />
      </div>
      <div className="slider-section">
        <div className="btn-slider btn-prev">
          <BtnNextPrev type="prev" onClickHandler={handlePrevSlide} />
        </div>

        <div className="container slider-body">
          <Slider ref={ref} {...settings}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </Slider>
        </div>
        <div className="btn-slider btn-next">
          <BtnNextPrev type="next" onClickHandler={handleNextSlide} />
        </div>
      </div>
    </section>
  );
};

export default VideoResource;
