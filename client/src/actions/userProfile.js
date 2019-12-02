import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_USERPROFILE,
  USERPROFILE_ERROR,
  CLEAR_USERPROFILE,
  GET_USERPROFILES
} from "./types";

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

//Get all user profiles
export const getCurrentProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_USERPROFILE });
  try {
    const res = await axios.get("api/userprofile");

    dispatch({
      type: GET_USERPROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USERPROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

//Get user profile by id
export const getCurrentProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`api/userprofile/user/${userId}`);

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
