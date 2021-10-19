import React from "react";
import aboutImg from "../../../images/about-img-4.png";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6">
            <img src={aboutImg} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 mt-5">
            <h5>About Us</h5>
            <h1>Perhu Don't Let You Suffer In Silence & Alone</h1>
            <p>
              Therapy (or psychotherapy, sometimes called talk therapy) is the
              process of working with a licensed therapist or counselor to
              develop positive thinking and coping skills .
            </p>
            <button className="btn-style">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
