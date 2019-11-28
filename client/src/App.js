import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/layouts/NavBar";
import Landing from "./components/layouts/Landing";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Landing />
    </Fragment>
  );
};

export default App;
