import {combineReducers} from 'redux';
import dummyReducer from './dummyReducer';
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  dummy: dummyReducer,
  auth: authReducer,
});

export default rootReducer;
