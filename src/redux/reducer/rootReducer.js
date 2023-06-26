import { combineReducers } from "redux";

import reducer from "./counterReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  counter: reducer,
  userReducer,
});

export default rootReducer;
