import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
 
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h3 className="large">
            Be a Hero to the missing one’s, <br />
            Help them reunite with their loved ones.
          </h3>
          <div className="buttons">
            <Link to="/register" className="btn btn-dark">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
