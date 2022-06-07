import React from "react";
import logo from "../src/images/logo.jpeg";
import Scrabble from "../src/images/Scrabble.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-light whole-navbar">
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav postit-links">
              <Link
                className="nav-link active"
                // aria-current="page"
                to="/stories"
              >
                Stories
              </Link>
              <Link className="nav-link" to="/">
                Contact
              </Link>
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
              <button class="nav-link postit-nav-button">Get Started</button>
            </div>
          </div>
        </div>
      </nav>
      {/* HEADER */}
      <div className="hero-stories">
        <div>
          <p className="hero-header">Welcome Maria,</p>
          <p>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />{" "}
            egestas massa velit aliquam. Molestim bibendum <br />
            hnt ipsum orci, platea aliquam id ut.{" "}
          </p>{" "}
          <br />
          <div>
            <button className="create-story">Create Story</button>
            <button className="go-to-stories">Go to Stories</button>
          </div>
        </div>
        <div>
          <img src={Scrabble} alt="scrabble-" />
        </div>
      </div>
      {/* FOOTER */}
      <div className="footer-img">
        <div className="footer-welcome">
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
    </div>
  );
};

export default Welcome;
