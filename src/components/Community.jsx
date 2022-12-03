import React from "react";
import CommunityCard from "./CommunityCard";
import Tagline from "./Tagline";

const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <Tagline
          title="জয়েন করুন আমাদের কমিউনিটিতে"
          icon="/images/image24.png"
        />
        <div className="community-list">
          <CommunityCard
            name="Flutter Developers Community @Bangladesh"
            img="/images/community1.png"
          />
          <CommunityCard
            name="MERN Developers Community @Bangladesh"
            img="/images/community2.png"
          />
          <CommunityCard
            name="Content Creator Community @Bangladesh"
            img="/images/community3.png"
          />
          <CommunityCard
            name="UI/UX Developers Community @Bangladesh"
            img="/images/community4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
