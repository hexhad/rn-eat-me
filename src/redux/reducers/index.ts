import {combineReducers} from 'redux';
import authReducer from './authReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  // dummy: dummyReducer,
  // auth: authReducer,
  auth: authReducer,
  products: productReducer,
});

export default rootReducer;
