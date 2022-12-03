import React from "react";
import { liveCourses, workshops } from "../Data/courses";
import CourseList from "./CourseList";
import Tagline from "./Tagline";

const Courses = (props) => {
  const { windowWidth } = props;
  return (
    <section className="courses">
      <div className="container">
        <Tagline
          title="Ostad helps you in your career"
          icon="/images/image16.png"
        />

        <CourseList
          name="লাইভ কোর্সসমূহ"
          icon="/images/image19.png"
          courses={liveCourses}
          windowWidth={windowWidth}
        />
        <CourseList
          name="ওয়ার্কশপ"
          icon="/images/image23.png"
          courses={workshops}
          windowWidth={windowWidth}
        />
      </div>
    </section>
  );
};

export default Courses;
