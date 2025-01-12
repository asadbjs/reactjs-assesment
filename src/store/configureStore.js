/** @format */
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "../redux";

const middleware = [
  thunk,
  // more middleware
];
let store = compose(applyMiddleware(...middleware))(createStore)(reducers);

export default store;
