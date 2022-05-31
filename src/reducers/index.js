import { combineReducers } from "redux";
import counter from "../reducers/counterReducer";

const allReducers = combineReducers({
  counter
});

export default allReducers;
