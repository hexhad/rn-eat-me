import {combineReducers} from 'redux';
import dummyReducer from './dummyReducer';

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;
