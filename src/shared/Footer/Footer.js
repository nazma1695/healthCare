import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {/* Footer area  */}

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="mb-3">Company</h5>
              <div className="footer-item">
                <ul>
                  <li>About</li>
                  <li>Our Doctors</li>
                  <li>Latest Blog</li>
                  <li>Cateers</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">Suport</h5>
              <div className="footer-item">
                <ul>
                  <li>Reviews</li>
                  <li>FAQs</li>
                  <li>Help Center</li>
                  <li>Doctors</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">Legal</h5>
              <div className="footer-item">
                <ul>
                  <li>Term of use</li>
                  <li>Code of conduct</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">Subscribe</h5>
              <div className="footer-item">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="footer-copyright">
              <p className="mt-3"> &copy; Perhu 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
