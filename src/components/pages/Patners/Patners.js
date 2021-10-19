import React from "react";
import patner1 from "../../../images/partner-logo-1.png";
import patner2 from "../../../images/partner-logo-2.png";
import patner3 from "../../../images/partner-logo-3.png";
import patner4 from "../../../images/partner-logo-4.png";
import patner5 from "../../../images/partner-logo-5.png";
import patner6 from "../../../images/partner-logo-6.png";
import "./Patner.css";
const Patners = () => {
  return (
    <div className="patner">
      <div className="container">
        <div className="row ">
          <div className="col-md-2">
            <img src={patner1} alt="" />
          </div>
          <div className="col-md-2">
            <img src={patner2} alt="" />
          </div>
          <div className="col-md-2">
            <img src={patner3} alt="" />
          </div>
          <div className="col-md-2">
            <img src={patner4} alt="" />
          </div>
          <div className="col-md-2">
            <img src={patner5} alt="" />
          </div>
          <div className="col-md-2">
            <img src={patner6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patners;
