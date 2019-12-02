import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import child from './Child'
import userProfile from "./userProfile";

export default combineReducers({
  alert,
  auth,
  child,
  userProfile
});
