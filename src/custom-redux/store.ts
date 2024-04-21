import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhansers(applyMiddleware(thunk))(
  createStore
);

export const store = createStoreWithMiddleware(rootReducer);
export const getStore = () => createStoreWithMiddleware(rootReducer);
export type AppState = ReturnType<typeof rootReducer>;
