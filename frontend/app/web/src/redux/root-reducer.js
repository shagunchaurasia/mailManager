import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mailReducer from "./masterMail/masterMail.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["mail"],
};

const rootReducer = combineReducers({
  mails: mailReducer,
});

export default persistReducer(persistConfig, rootReducer);
