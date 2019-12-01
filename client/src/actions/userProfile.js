import axios from "axios";
import { setAlert } from "./alert";

import { GET_USERPROFILE, USERPROFILE_ERROR } from "./types";

//Get current user profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("api/userprofile/me");

    dispatch({
      type: GET_USERPROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USERPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Create or update user profile
export const createUserProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("api/userprofile", formData, config);
    dispatch({
      type: GET_USERPROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created"), "success");

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: USERPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
