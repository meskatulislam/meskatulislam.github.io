import React from "react";
import ReactSlider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import CompanyCard from "./CompanyCard";
const Company = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="company">
      <p>Top companies trust Ostad</p>
      <div className="company-cards">
        <ReactSlider {...settings}>
          <CompanyCard img="/images/c1.png" />
          <CompanyCard img="/images/c2.png" />
          <CompanyCard img="/images/c3.png" />
          <CompanyCard img="/images/c4.png" />
          <CompanyCard img="/images/c1.png" />
          <CompanyCard img="/images/c3.png" />
          <CompanyCard img="/images/c4.png" />
          <CompanyCard img="/images/c1.png" />
          <CompanyCard img="/images/c3.png" />
          <CompanyCard img="/images/c4.png" />
        </ReactSlider>
      </div>
    </div>
  );
};

export default Company;
