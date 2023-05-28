import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { dataReducer } from "./dataReducer";
import { authReducer } from "./authReducer";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: [],
};

const rootReducer = combineReducers({
  data: dataReducer,
  auth: authReducer
});

export { rootPersistConfig, rootReducer };
