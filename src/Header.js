import React from "react";
// import Rectangle from "../src/images/Rectangle.png";

const Header = () => {
  return (
    <>
      <div className="header-bkg">
        <div className="header-text">
          <p className="stay-curious">Stay Curious</p>
          <p className="header-body-text">
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
            massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
            aliquam id ut.{" "}
          </p>
          <div className="header-input-button">
            <input
              typeof="text"
              className="m"
              placeholder="Email Address"
            ></input>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
