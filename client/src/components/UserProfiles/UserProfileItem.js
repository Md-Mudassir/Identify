import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserProfileItem = ({
  userProfile: {
    user: { _id, name, avatar },
    address,
    phone
  }
}) => {
  return (
    <div className="profile bg-light">
      <img src={avatar} alt="" className="round-img" />
      <div>
        <h3>Name: {name}</h3>
        <p>Address: {address}</p>
        <p>Contact:     {phone}</p>
        <Link to={`/userprofile/${_id}`} className="btn btn-dark">
          View Profile
        </Link>
      </div>
    </div>
  );
};

UserProfileItem.propTypes = {
  userProfile: PropTypes.object.isRequired
};

export default UserProfileItem;
