import React from "react";
import useAuth from "../../../hooks/useAuth";
import BannerImage from "../../../images/about-img-4.png";
const Login = () => {
  const {
    singInUsingGoogle,
    handleRegistration,
    handleEmailChange,
    handlePasswordChange,
  } = useAuth();
  return (
    <div>
      <div className=" container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                onChange={handleEmailChange}
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                onChange={handlePasswordChange}
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <button
              onSubmit={handleRegistration}
              type="submit"
              className="btn btn-primary"
            >
              Login
            </button>
            <div className="from-group mt-5">
              <button className="btn-style" onClick={singInUsingGoogle}>
                Google Sign In
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img className="img-fluid" src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
