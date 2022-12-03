import React from "react";

const Nav = () => {
  return (
    <div className="nav-container">
      <nav className="container">
        <img src="/images/logo.png" alt="" />
        <div className="nav-right">
          <ul className="nav-items">
            <li>
              <p>সেট ইয়োর গোল</p>{" "}
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.00001 3.78145L8.30001 0.481445L9.24267 1.42411L5.00001 5.66678L0.757339 1.42411L1.70001 0.481445L5.00001 3.78145Z"
                  fill="#101828"
                />
              </svg>
            </li>
            <li id="link">আপকামিং লাইভ ব্যাচ</li>
            <li id="link">
              <div className="lang">
                <img src="/images/en.svg" alt="" />
                <p>English</p>
              </div>
            </li>
          </ul>
          <div className="nav-buttons">
            <button type="button" className="btn-login">
              LOGIN
            </button>
            <button className="btn-menu">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H18V2H0V0ZM6 7H18V9H6V7ZM0 14H18V16H0V14Z"
                  fill="#050400"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
