import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="d-flex">
              <img
                src={logo}
                style={{ height: "50px", width: "100px" }}
                alt=""
              />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
                <Link to="/project" className="nav-link">
                  Projects
                </Link>
                {
                  <Link to="/blog" className="nav-link">
                    Blog
                  </Link>
                }
                {
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                }
                <span className="mt-2">{user.displayName} </span>
                {user.email ? (
                  <Link to="/login">
                    <button onClick={logOut} className="btn btn-info me-2">
                      Log-out
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-warning me-2">Log In</button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
