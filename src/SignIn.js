import React from "react";
// import Vector from "../src/images/Vector9.jpeg";
import Shortline from "../src/images/Shortline.jpeg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signIn">
      <p className="fw-bold signin-heading">
        Join Post<span>it.</span>
      </p>{" "}
      <br />
      <p className="sign-text">
        Enter your email address to create an account on Post
        <span className="it">it</span>.
      </p>{" "}
      <br />
      <p>Your Email Address</p>
      <input typeof="text" className="signiin-input" />
      <br />
      <p>Password</p>
      <input typeof="text" className="signiin-input" />
      <button>Continue</button> <br />
      <p className="lines-or">
        {" "}
        <img src={Shortline} alt="line" />
        or
        <img src={Shortline} alt="line" />
      </p>
      {/* <div className="google-facebook">
        <img src={Google} alt="google-logo" width="10%" />
        <p>Continue with Google</p>
      </div> */}
      <p className="fw-bold">
        Already have an account? <Link to="/welcome">Sign In</Link>
      </p>
    </div>
  );
};

export default SignIn;
