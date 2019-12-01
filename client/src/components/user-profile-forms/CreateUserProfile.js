import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const CreateUserProfile = props => {
  const [formData, setFormData] = useState({
    adhaarNo: "",
    phone: "",
    address: ""
  });

  const { address, adhaarNo, phone } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 className="large text-dark">Create Your Profile</h1>

      <form className="form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Adhaar Number"
            name="adhaarNo"
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
            onChange={e => onChange(e)}
            name="address"
            required
          />
          <small className="form-text">Provide your residential address.</small>
        </div>

        <input type="submit" className="btn btn-dark my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

CreateUserProfile.propTypes = {};

export default CreateUserProfile;
