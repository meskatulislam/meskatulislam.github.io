import React from "react";

const Tagline = (props) => {
  const { title, icon } = props;
  return (
    <section className="tagline">
      <div className="tag-head">
        <img src={icon} alt="" />
        <h1>{title}</h1>
      </div>
      <p>
        স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের
        বাটনে।
      </p>
    </section>
  );
};

export default Tagline;
