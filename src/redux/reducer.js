import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import accessToken from "./action/accessToken.js";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // whitelist: ["user"]
  // blacklist -> 그것만 제외합니다
};

export const Reducer = combineReducers({
  accessToken: accessToken,
});

export default persistReducer(persistConfig, Reducer);
