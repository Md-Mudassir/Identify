import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("not match");
    } else {
      console.log("Yay");
    }
    // } else {
    //   const newUser = {
    //     name,
    //     email,
    //     password
    //   };
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     };
    //     const body = JSON.stringify(newUser);
    //     const res = await axios.post("/api/users", body, config);
    //     console.log(res.data);
    //   } catch (err) {
    //     console.error(err.res.data);
    //   }
    // }
  };

  return (
    <Fragment>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => onChange(e)}
            name="email"
          />
          <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={e => onChange(e)}
            placeholder="Password"
            name="password"
            minLength="6"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password2}
            onChange={e => onChange(e)}
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-danger" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Fragment>
  );
};

export default Register;
