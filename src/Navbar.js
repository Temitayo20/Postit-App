import React from "react";
import logo from "./images/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light whole-navbar">
        <div className="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={logo} className="logo" alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end ms-3"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav navbar-link">
              <Link
                className="nav-link active"
                // aria-current="page"
                to="/stories"
              >
                Stories
              </Link>
              <Link class="nav-link active" to="/">
                Contact
              </Link>
              <Link class="nav-link active" to="/signin">
                SignIn
              </Link>
              <Link class="nav-link active navbar-button" to="/signup">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
