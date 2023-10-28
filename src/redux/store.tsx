import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
import rootReducer from "./reducers";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(...[thunk, logger]),
);
export const persistor = persistStore(store);
