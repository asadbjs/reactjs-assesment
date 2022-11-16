/** @format */

import { persistCombineReducers } from "redux-persist";
import AsyncStorage from "redux-persist/lib/storage";
import { reducer as ListingRedux } from "./ListingRedux";

const config = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["listing"],
};

const appReducer = persistCombineReducers(config, {
  listing: ListingRedux,
});

export default appReducer;
