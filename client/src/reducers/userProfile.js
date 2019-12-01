import {
  GET_USERPROFILE,
  CLEAR_USERPROFILE,
  USERPROFILE_ERROR
} from "../actions/types";

const initialState = {
  userProfile: null,
  userProfiles: [],
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERPROFILE:
      return {
        ...state,
        userProfile: payload,
        loading: false
      };
    case USERPROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_USERPROFILE:
      return {
        ...state,
        userProfile: null,
        loading: false
      };
    default:
      return state;
  }
};
