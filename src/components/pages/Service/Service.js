import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { name, description, img, id } = service;
  return (
    <div className="service">
      <div className="service-card pb-5">
        <img src={img} alt="" />
        <div className="service-text">
          <h3>{name}</h3>
          <p className="px-3">{description}</p>
          <Link to={`/appointment/${id}`}>
            <button className="btn-style">Make An Appointment</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
