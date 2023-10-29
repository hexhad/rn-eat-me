import React, {useEffect} from 'react';
import AuthStack from './AuthStack';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SecuredStack from './SecuredStack';
import {connect} from 'react-redux';
import axiosInstance from '../../services/axiosInstance';

const mapState = state => ({
  auth: state.auth.isLogged,
  token: state.auth.token,
});

const connector = connect(mapState, {});

const RootStack = ({auth, token}) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen?.hide();
    }
  }, []);

  // useEffect(() => {
  //   axiosInstance.defaults.headers.common.Authorization = token;
  // }, [token]);

  return auth ? <SecuredStack /> : <AuthStack />;
};

export default connector(RootStack);
