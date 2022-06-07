import React from "react";
import Maria from "../src/images/Maria.jpeg";

const Section1 = () => {
  return (
    <div className="container-fluid">
      <p className="trending-stories ps-5 pt-5">Trending Stories</p>
      {/* section1 */}
      <div className="trending container-fluid">
        <div className="trending-nature">
          <button>Nature</button>
          <div className="profile">
            <img src={Maria} className="maria-img" alt="profile"></img>
            <p className="maria">Maria Davies</p>
          </div>
          <p className="section1-big">
            The 20 Biggest Agro <br />
            Companies In Nigeria <br />
            2022
          </p>
          <p className="section1-date">May 21, 2022</p>
        </div>
        <div>
          {/* section2 */}
          <div className="trending-lifestyle">
            <button>Lifetyle</button>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria">Maria Davies</p>
            </div>
            <p className="section1a-big">
              The 20 Biggest Fashion Companies <br />
              In Nigeria 2022
            </p>
            <p className="section1-date">May 21, 2022</p>
            {/* section3 */}
            <div className="techs-sports">
              <div className="technology">
                <button>Technology</button>
                <div className="profile">
                  <img src={Maria} className="maria-img" alt="profile"></img>
                  <p className="maria">Maria Davies</p>
                </div>
                <p className="section1b-big">
                  The 20 Biggest FinTech Companies <br />
                  In Nigeria 2022
                </p>
                <p className="section1-date">May 21, 2022</p>
              </div>
            </div>
            {/* section4 */}
            <div className="sports">
              <button>Sports</button>
              <div className="profile">
                <img src={Maria} className="maria-img" alt="profile"></img>
                <p className="maria">Maria Davies</p>
              </div>
              <p className="section1c-big">
                The 20 Biggest Sports Companies <br />
                In Nigeria 2022
              </p>
              <p className="section1-date">May 21, 2022</p>
            </div>
          </div>
        </div>
      </div>
      <div className="blue-image container-fluid">
        <p>
          Try Post<span>it.</span>
        </p>
        <p>
          Do you want to write or discover stories from writers on any topic?
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
  );
};

export default Section1;
