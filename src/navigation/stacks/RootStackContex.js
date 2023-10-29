import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import AuthStack from "./AuthStack";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
import SecuredStack from "./SecuredStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { delayFor } from "../../utils/shortHands";

export const AuthContext = createContext();
const RootStack = () => {

  const [initialState, setInitialState] = useState({});
  const setState = async (data) => {
    let state = await AsyncStorage.setItem("EAT_ME_APP", JSON.stringify(data));
    // console.log('AsyncStorage','setState','data',data);
    // console.log('AsyncStorage','state',state);

  };

  const getState = async () => {
    return await AsyncStorage.getItem("EAT_ME_APP");
  };


  useEffect(() => {
    const bootstrapAsync = async () => {
      // let userState;
      try {
        let userState = await getState();
        console.log("bootstrapAsync", "userState", userState);
        let parsedData = JSON.parse(userState);
        setInitialState(parsedData);
        dispatch({ type: "RESTORE_TOKEN", data: { isSignOut: parsedData?.isSignOut, token: parsedData?.token } });

        // setInitialState(userState);
        // await delayFor()
        if (Platform.OS === "android") {
          SplashScreen?.hide();
        }
      } catch (e) {
        // may be a timeout or network better to move to Login
        // of the issue with network have to wrap with network WRAPPER first
        dispatch({ type: "SIGN_OUT" });
      }

      // dispatch({ type: "RESTORE_TOKEN", token: userToken });

    };
    bootstrapAsync();
  }, []);

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "LODAING":
          return {
            ...prevState,
            userToken: null,
            isSignOut: true,
            isLoading: true
          };
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.data.token,
            isSignOut: action.data.isSignOut,
            isLoading: false
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token
          };
        case "SIGN_OUT":
          console.log("SIGN_OUT", "triggered");
          return {
            ...prevState,
            isSignOut: true,
            userToken: null
          };
      }
    },
    initialState
  );

  useEffect(() => {
    console.log("initialState", initialState);
    setState(state);
  }, [initialState]);

  useEffect(() => {
    console.log("SAVE TO LOCAL", state);
    setState(state);
  }, [state]);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      }
    }),
    []
  );


  return (
    <AuthContext.Provider value={authContext}>
      {console.log(state)}
      {!!!state?.isSignOut ? <SecuredStack /> : <AuthStack />}
    </AuthContext.Provider>
  );

};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default RootStack;
