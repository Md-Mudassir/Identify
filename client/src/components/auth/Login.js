import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    console.log("Yay");
  };

  return (
    <Fragment>
      <p className="lead">
        <i className="fas fa-user"></i> Log Into Your Account
      </p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={e => onChange(e)}
            name="email"
          />
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
        <input type="submit" className="btn btn-dark" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;
