import { DUMMY } from "../types";

const initialState = {
  dummy: {
    loading: false,
    data: [],
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DUMMY.LOADING:
      return {
        ...state,
        loading: true,
      };
    case DUMMY.SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case DUMMY.FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
