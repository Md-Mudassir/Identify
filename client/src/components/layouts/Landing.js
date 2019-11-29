import React from "react";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h3 className="large">
            Be a Hero to the missing one’s, <br />
            Help them reunite with their loved ones.
          </h3>
          {/* <p className="lead">
            Be a Hero to the missing one’s, Help them reunite with their loved
            ones.
          </p> */}
          <div className="buttons">
            <Link to="/register" className="btn btn-danger">
              Get Started
            </Link>
            <Link to="/login" className="btn btn-light">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
