import {AUTH, DUMMY} from '../types';

const initialState = {
  isSignOut: true,
  token: null,
  error: null,
  loading: false,
};

export default (state = initialState, action: {type: any; payload: any}) => {
  switch (action.type) {
    case AUTH.CLEAR:
      return initialState;
    case AUTH.LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH.SUCCESS:
      return {
        ...state,
        isSignOut: false,
        loading: false,
        token: action.payload,
      };

    case AUTH.FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
