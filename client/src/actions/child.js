import axios from "axios";
import { setAlert } from "./alert";
import { GET_CHILDRENS, CHILD_ERROR } from "./types";

//Get childrens
export const getChildrens = () => async dispatch => {
  try {
    const res = await axios.get("api/childprofiles");

    dispatch({
      type: GET_CHILDRENS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: CHILD_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
