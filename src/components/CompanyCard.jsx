import React from "react";

const CompanyCard = (props) => {
  return (
    <div className="company-card">
      <img src={props.img} alt="" />
    </div>
  );
};

export default CompanyCard;
