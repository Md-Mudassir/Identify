import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../layouts/Spinner";
import DashboardActions from "./DashboardActions";
import { getCurrentProfile } from "../../actions/userProfile";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  userProfile: { userProfile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);
  return loading && userProfile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-dark">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome, {user && user.name}
      </p>
      {userProfile !== null ? (
        <Fragment>
          <DashboardActions />
        </Fragment>
      ) : (
        <Fragment>
          <p>You have'nt setup your profile, please add some info</p>
          <Link to="/create-profile" className="btn btn-dark my-1">
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  userProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  userProfile: state.userProfile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
