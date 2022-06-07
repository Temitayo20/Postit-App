import React from "react";

const Footer = () => {
  return (
    <div className="footer-img">
      <div className="footer">
        <div>
          <p className="fw-bold">
            About Post<span>it.</span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Tincidunt id sem vel quis in turpis sit eget pellentesque.
            <br /> Nunc etiicies in rhoncus, rhoncus in arcu. Tincidunt <br />
            neque fusce vitaenisi aliquet. que maeae tortoere
            <br /> necsem commodo ac.
          </p>
        </div>
        <div>
          <p className="fw-bold">Quick Menu</p>
          <p>Home</p>
          <p>Stories</p>
          <p>Trending Stories</p>
          <p>Popular Stories</p>
        </div>
        <div>
          <p>Sign Up</p>
          <p>Log In</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p className="fw-bold">Subscribe to our newsletter</p>
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
      <hr className="line"></hr>
    </div>
  );
};

export default Footer;
