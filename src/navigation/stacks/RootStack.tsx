import React, { useEffect } from "react";
import AuthStack from "./AuthStack";
import { Platform } from "react-native";
import SplashScreen from "react-native-splash-screen";
import SecuredStack from "./SecuredStack";
import { connect } from "react-redux";


const mapState = (state : any) => ({
  auth: state.auth.isSignOut
});

const connector = connect(mapState, {});

const RootStack = ({ auth } : { auth : boolean }) => {
  useEffect(() => {
    if (Platform.OS === "android") {
      SplashScreen?.hide();
    }
  }, []);

  return auth ? <AuthStack /> : <SecuredStack />;
};

export default connector(RootStack);
