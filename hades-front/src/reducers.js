import { combineReducers } from "redux";

const constantReducer = (state = {}) => state;

export default combineReducers({
  test: constantReducer
});
