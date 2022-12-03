import React from "react";

const PersonCard = () => {
  return (
    <div className="person-card">
      <img src="/images/person.png" alt="" />
      <div className="person-info">
        <p className="person-name">Kazi Ahad Islam (Erfan)</p>
        <p className="persion-designation">Country HR Manager, Amann Group</p>
        <div className="person-logos">
          <div className="person-logo">
            <img src="/images/c3.png" alt="" />
          </div>
          <div className="person-logo logo-w">
            <img src="/images/c2.png" alt="" />
          </div>
          <div className="person-logo">
            <img src="/images/c3.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
