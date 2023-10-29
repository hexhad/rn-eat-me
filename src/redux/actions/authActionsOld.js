import { AUTH, DUMMY } from "../types";
import { delayFor } from "../../utils/shortHands";
import { RootNavigation } from "../../navigation/rootNavigation";
import { SCREEN_NAMES } from "../../constants/screens";

const loginAction = () => async (dispatch, getState) => {
  try {
    dispatch({type: AUTH.LOADING});
    await delayFor();
    dispatch({type: AUTH.SUCCESS, payload: 'token'});
  } catch (e) {
    dispatch({type: AUTH.FAILED, payload: e});
  }
};

const logoutAction = () => async (dispatch, getState) => {
  try {
    dispatch({type: AUTH.LOADING});
    dispatch({type: AUTH.CLEAR});
    // RootNavigation.restStack( [{ name: SCREEN_NAMES.LOGIN }])
    RootNavigation.popToTop()
  } catch (e) {
    dispatch({type: AUTH.FAILED, payload: e});
  }
};

export const AuthActionsOld = {
  loginAction,
  logoutAction
};
