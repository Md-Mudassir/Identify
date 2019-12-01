import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/userProfile";

const Dashboard = ({ getCurrentProfile, auth, userProfile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return <div>Dash</div>;
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
