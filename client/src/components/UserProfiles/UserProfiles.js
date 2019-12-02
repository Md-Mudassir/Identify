import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layouts/Spinner";
import UserProfileItem from "./UserProfileItem";
import { getCurrentProfiles } from "../../actions/userProfile";

const UserProfiles = ({
  getCurrentProfiles,
  userProfile: { userProfiles, loading }
}) => {
  useEffect(() => {
    getCurrentProfiles();
  }, [getCurrentProfiles]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-dark">Registered Citizens</h1>
          <div className="profiles">
            {userProfiles.length > 0 ? (
              userProfiles.map(userProfile => (
                <UserProfileItem
                  key={userProfile._id}
                  userProfile={userProfile}
                />
              ))
            ) : (
              <h4>No Citizen Profiles found..</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

UserProfiles.propTypes = {
  getCurrentProfiles: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.userProfile
});

export default connect(mapStateToProps, { getCurrentProfiles })(UserProfiles);
