import { combineReducers } from "redux";

import reducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: reducer,
});

export default rootReducer;
