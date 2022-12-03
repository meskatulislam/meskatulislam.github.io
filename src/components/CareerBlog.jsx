import React from "react";
import Slider from "react-slick";
import { blogs } from "../Data/blogs";
import BlogCard from "./BlogCard";
import Tagline from "./Tagline";

const CareerBlog = (props) => {
  const { windowWidth } = props;
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "5px",
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="career-blog">
      <div className="container">
        <Tagline
          title="ক্যারিয়ার গাইডলাইন নিয়ে আরও জানতে পড়ুন"
          icon="/images/image27.png"
        />
        {windowWidth < 768 ? (
          <div className="slider-section">
            <Slider {...settings}>
              {blogs.map((blog, indx) => {
                return (
                  <BlogCard
                    key={indx}
                    title={blog.title}
                    date={blog.date}
                    duration={blog.duration}
                  />
                );
              })}
            </Slider>
          </div>
        ) : (
          <div className="blog-list">
            {blogs.map((blog, indx) => {
              return (
                <BlogCard
                  key={indx}
                  title={blog.title}
                  date={blog.date}
                  duration={blog.duration}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerBlog;
