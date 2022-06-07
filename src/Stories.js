import React from "react";
import Scrabble from "../src/images/Scrabble.png";
import Maria from "../src/images/Maria.jpeg";
import Arrow from "../src/images/Arrow.png";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Stories = () => {
  return (
    <div>
      <Navbar />
      {/* HERO PAGE */}
      <div className="hero-stories">
        <div>
          <p className="hero-header">
            You’ve got a story,
            <br /> Post<span>it.</span>
          </p>
          <p>
            Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur <br />{" "}
            egestas massa velit aliquam. Molestim bibendum <br />
            hnt ipsum orci, platea aliquam id ut.{" "}
          </p>{" "}
          <br />
          <div className="header-input-button">
            <input
              typeof="text"
              className="m"
              placeholder="Email Address"
            ></input>
            <button>Get Started</button>
          </div>
        </div>
        <div>
          <img src={Scrabble} alt="scrabble" />
        </div>
      </div>
      {/* THE STORIES */}
      <div className="the-stories">
        {/* ROW 1 */}
        <div className="stories-row1 container-fluid">
          {/* STORY 1 */}
          <div className="the-stories-technology">
            <div className="stories-tech-bkg">
              <button className="the-stories-technology-button">
                Technology
              </button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 2 */}
          <div className="the-stories-technology">
            <div className="stories-nature-bkg">
              <button className="the-stories-nature-button">Nature</button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Agro Companies In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 3 */}
          <div className="the-stories-technology">
            <div className="stories-lifestyle-bkg">
              <button className="the-stories-lifestyle-button">
                Lifestyle
              </button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="stories-row1 container-fluid">
          {/* STORY 4 */}
          <div className="the-stories-technology">
            <div className="stories-nature2-bkg">
              <button className="the-stories-nature-button">Nature</button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 5 */}
          <div className="the-stories-technology">
            <div className="stories-lifestyle2-bkg">
              <button className="the-stories-lifestyle-button">
                Lifestyle
              </button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 6 */}
          <div className="the-stories-technology">
            <div className="stories-sports-bkg">
              <button className="the-stories-sports-button">Sports</button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        {/* ROW 3 */}
        <div className="stories-row1 container-fluid">
          {/* STORY 7 */}
          <div className="the-stories-technology">
            <div className="stories-lifestyle3-bkg">
              <button className="the-stories-lifestyle-button">
                Lifestyle
              </button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 8 */}
          <div className="the-stories-technology">
            <div className="stories-sports2-bkg">
              <button className="the-stories-sports-button">Sports</button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 9 */}
          <div className="the-stories-technology">
            <div className="stories-sports3-bkg">
              <button className="the-stories-sports-button">Sports</button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        {/* ROW 4 */}
        <div className="stories-row1 container-fluid">
          {/* STORY 10 */}
          <div className="the-stories-technology">
            <div className="stories-tech2-bkg">
              <button className="the-stories-technology-button">
                Technology
              </button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 11 */}
          <div className="the-stories-technology">
            <div className="stories-nature3-bkg">
              <button className="the-stories-nature-button">Nature</button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Agro Companies In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="#" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
          {/* STORY 12 */}
          <div className="the-stories-technology">
            <div className="stories-lifestyle4-bkg">
              <button className="the-stories-lifestyle-button">
                Lifestyle
              </button>
            </div>
            <p className="stories-heading">
              The 20 Biggest Fintech Companies <br />
              In Nigeria 2022
            </p>
            <div className="profile">
              <img src={Maria} className="maria-img" alt="profile"></img>
              <p className="maria text-dark">
                <span className="fw-lighter">By</span> Maria Davies{" "}
                <span className="fw-lighter">- May 21, 2022</span>
              </p>
            </div>
            <p className="fw-lighter">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>{" "}
            <div>
              <img src={Arrow} alt="arrow" />
              <Link to="/stories" className="stories-readmore">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER  */}
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
    </div>
  );
};

export default Stories;
