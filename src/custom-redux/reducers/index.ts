import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { appDataReducer } from "./appData";

const rootReducer = combineReducers({
  auth: authReducer,
  appData: appDataReducer,
});

export default rootReducer;
