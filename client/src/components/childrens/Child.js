import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getChildrens } from "../../actions/child";

const Child = ({ getChildrens, child: { childrens, loading } }) => {
  useEffect(() => {
    getChildrens();
  }, [getChildrens]);
  return <div></div>;
};

Child.propTypes = {
  getChildrens: PropTypes.func.isRequired,
  child: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  child: state.child
});

export default connect(mapStateToProps, { getChildrens })(Child);
