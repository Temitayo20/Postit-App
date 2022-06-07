import React from "react";
import logo from "../src/images/logo.jpeg";
import Maria from "../src/images/Maria.jpeg";
import Edit from "../src/images/edit.png";
import Group from "../src/images/Group397.png";
import { Link } from "react-router-dom";

const CreateStory = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-light whole-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-end ms-3 "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav postit-links">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/stories"
              >
                Stories
              </Link>
              <Link className="nav-link" to="#">
                Contact
              </Link>
              <img src={Maria} className="maria-img" alt="profile"></img>
            </div>
          </div>
        </div>
      </nav>

      <br />
      {/* FORM  */}
      <div className="form-story">
        <p className="create-story-header">Create Story</p>
        <div className="edit-wrap field-1">
          <img src={Edit} className="edit-icon" alt="edit" />
          <input
            typeof="text"
            className="edit-text"
            placeholder="Title"
          ></input>
        </div>
        <div className="edit-wrap field-1">
          <img src={Edit} className="edit-icon" alt="edit" />
          <input typeof="text" className="edit-text" placeholder="Tags"></input>
        </div>
        <div className="edit-wrap field-1">
          <img src={Group} className="edit-icon" alt="icon" />
          <div className="input-button">
            <input
              typeof="text"
              className="edit-text"
              placeholder="Choose cover image"
            ></input>
            <button className="edit-button">Upload Cover Image</button>
          </div>
        </div>
        <div className="edit-wrap field-1 text-field">
          <img src={Edit} className="edit-icon" alt="edit" />
          <input
            typeof="text"
            className="edit-text"
            placeholder="Write your story......."
          ></input>
        </div>
        <button className="publish-button">Publish Story</button>
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

export default CreateStory;
