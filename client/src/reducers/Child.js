import { GET_CHILDRENS, CHILD_ERROR } from "../actions/types";

const initialState = {
  childrens: [],
  child: null,
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CHILDRENS:
      return {
        ...state,
        childrens: payload,
        loading: false
      };
    case CHILD_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
};
