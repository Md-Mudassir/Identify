import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import { getCurrentProfiles } from "../../actions/userProfile";

const UserProfiles = ({
  getCurrentProfiles,
  userProfile: { userProfiles, loading }
}) => {
  useEffect(() => {
    getCurrentProfiles();
  }, []);
  return <div></div>;
};

UserProfiles.propTypes = {
  getCurrentProfiles: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.userProfile
});

export default connect(mapStateToProps, { getCurrentProfiles })(UserProfiles);
