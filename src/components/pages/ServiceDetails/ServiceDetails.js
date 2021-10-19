import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("/services.JSON")
      .then((res) => res.json())
      .then((data) => {
        const details = data?.find((td) => td.id == id);
        setService(details);
      });
  }, [id]);

  return (
    <div>
      <div className="container">
        <h1 className="text-center m-5">This is service Detail </h1>
        <div className="row">
          <div className="offset-md-3 col-md-6 text-center">
            <img src={service?.img} alt="" />
            <h3>{service?.name}</h3>
            <p>{service?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
