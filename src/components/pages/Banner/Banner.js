import React from "react";
import banner from "../../../images/hero-img-10.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6">
              <div className="banner-text">
                <h5>Best Psychologist Solutions</h5>
                <h1>Create Mental Changes & Achieved Result</h1>
                <p>
                  Therapy (or psychotherapy, sometimes called talk therapy) is
                  the process of working with a licensed therapist or counselor
                  .
                </p>
                <button className="btn-style">Learn More</button>
              </div>
            </div>
            <div className="col-md-6">
              <img src={banner} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
