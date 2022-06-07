import React from "react";
// import Vector from "../src/images/Vector9.png";
import Shortline from "../src/images/Shortline.jpeg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="signIn">
        <p className="fw-bold signup-heading">Welcome Back</p> <br />
        <p className="signup-text">
          Enter the email address associated with your account,
          <br /> and we’ll send a magic link to your inbox.
        </p>{" "}
        <p>Your Email Address</p>
        <input typeof="text" className="signiin-input" />
        <p>Username</p>
        <input typeof="text" className="signiin-input" />
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
          No account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
