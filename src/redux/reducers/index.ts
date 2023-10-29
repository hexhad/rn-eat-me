import {combineReducers} from 'redux';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  // dummy: dummyReducer,
  // auth: authReducer,
  auth:authReducer
});

export default rootReducer;
