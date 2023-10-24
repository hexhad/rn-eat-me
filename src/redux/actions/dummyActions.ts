import {DUMMY} from '../types';

const dummyAction = () => async (dispatch, getState) => {
  try {
    dispatch({type: DUMMY.LOADING});
    dispatch({type: DUMMY.SUCCESS, payload: 'success'});
  } catch (e) {
    dispatch({type: DUMMY.FAILED, payload: e});
  }
};

export const DummyActions = {
  dummyAction,
};
