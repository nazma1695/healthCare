import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeartbeat,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./Category.css";
const Category = () => {
  const user = <FontAwesomeIcon icon={faUser} />;
  const Heartbeat = <FontAwesomeIcon icon={faHeartbeat} />;
  const userTie = <FontAwesomeIcon icon={faUserTie} />;
  return (
    <div>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4">
            <div className="category-item">
              <h3>{user}</h3>
              <h2>Children Therapy</h2>
              <p>
                Therapy (or psychotherapy, sometimes called talk therapy) is the
                process of working with a licensed therapist or counselor .
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="category-item">
              <h3>{Heartbeat}</h3>
              <h2>Couples Therapy</h2>
              <p>
                Therapy (or psychotherapy, sometimes called talk therapy) is the
                process of working with a licensed therapist or counselor .
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="category-item">
              <h3>{userTie}</h3>
              <h2> Individual Therapy</h2>
              <p>
                Therapy (or psychotherapy, sometimes called talk therapy) is the
                process of working with a licensed therapist or counselor .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
