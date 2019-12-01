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
