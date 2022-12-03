import React from "react";

const BlogCard = (props) => {
  const { title, date, duration } = props;
  return (
    <div className="blog">
      <img src="/images/blog.png" alt="" />
      <div className="blog-body">
        <div className="blog-head">
          <div className="blog-date">
            <p>{date}</p>
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2.74414" r="2" fill="#475467" />
            </svg>
            <p>{duration} min read</p>
          </div>
          <h1>{title}</h1>
        </div>
        <p>IELTS Reading</p>
      </div>
    </div>
  );
};

export default BlogCard;
