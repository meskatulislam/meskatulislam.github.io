import React from "react";
import Slider from "react-slick";
import CourseCard from "./CourseCard";

const CourseList = (props) => {
  const { name, icon, courses, windowWidth } = props;
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
    <div className="course-content">
      <div className="course-head">
        <img src={icon} alt="" />
        <h1>{name}</h1>
      </div>

      {windowWidth < 768 ? (
        <div className="slider-section">
          <Slider {...settings}>
            {courses.map((course, indx) => {
              return (
                <CourseCard
                  key={indx}
                  title={course.title}
                  batch={course.batch}
                  availableSeat={course.availableSeat}
                  remainingDay={course.remainingDay}
                  prevPrice={course.prevPrice}
                  currentPrice={course.currentPrice}
                  link={course.link}
                  img={course.img}
                />
              );
            })}
          </Slider>
        </div>
      ) : (
        <div className="course-list">
          {courses.map((course, indx) => {
            return (
              <CourseCard
                key={indx}
                title={course.title}
                batch={course.batch}
                availableSeat={course.availableSeat}
                remainingDay={course.remainingDay}
                prevPrice={course.prevPrice}
                currentPrice={course.currentPrice}
                link={course.link}
                img={course.img}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CourseList;
