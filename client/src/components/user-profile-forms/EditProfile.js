import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  createUserProfile,
  getCurrentProfile
} from "../../actions/userProfile";

const EditUserProfile = ({
  userProfile: { userProfile, loading },
  createUserProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    adhaarNo: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      adhaarNo: loading || !userProfile.adhaarNo ? "" : userProfile.adhaarNo,
      phone: loading || !userProfile.phone ? "" : userProfile.phone,
      address: loading || !userProfile.adhaarNo ? "" : userProfile.adhaarNo
    });
  }, []);

  const { address, adhaarNo, phone } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createUserProfile(formData, history, true);
  };

  return (
    <Fragment>
      <h1 className="large text-dark">Create Your Profile</h1>

      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Adhaar Number"
            name="adhaarNo"
            value={adhaarNo}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">
            For security reasons please provide valid Adhaar Number so that
            there's only one account per Adhaar.
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            value={phone}
            onChange={e => onChange(e)}
            required
          />
          <small className="form-text">
            Enter a valid number so that other's can contact you.
          </small>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={e => onChange(e)}
            name="address"
            required
          />
          <small className="form-text">Provide your residential address.</small>
        </div>

        <input type="submit" className="btn btn-dark my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

EditUserProfile.propTypes = {
  userCreateProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  userProfile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  userProfile: state.userProfile
});

export default connect(mapStateToProps, {
  createUserProfile,
  getCurrentProfile
})(withRouter(EditUserProfile));
