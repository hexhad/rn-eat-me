import React, {useEffect} from 'react';
import AuthStack from './AuthStack';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SecuredStack from './SecuredStack';
import {connect} from 'react-redux';

const mapState = state => ({
  auth: state.auth.isLogged,
});

const connector = connect(mapState, {});

const RootStack = ({auth}) => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen?.hide();
    }
  }, []);

  return auth ? <SecuredStack /> : <AuthStack />;
};

export default connector(RootStack);
