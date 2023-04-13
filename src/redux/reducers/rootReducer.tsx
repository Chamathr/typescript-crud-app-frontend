import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { dataReducer } from "./dataReducer";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  data: dataReducer
});

export { rootPersistConfig, rootReducer };
