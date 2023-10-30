import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SCREEN_NAMES} from '../../constants/screens';
import AccountModal from '../screens/Modal/AccountModal';
import LoginScreen from '../screens/auth/LoginScreen';
import WebViewModal from '../screens/Modal/WebViewModal';
import EmailLogin from '../screens/auth/EmailLoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={SCREEN_NAMES.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAMES.EMAIL_SCREEN} component={EmailLogin} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={SCREEN_NAMES.WEB_VIEW} component={WebViewModal} />
        <Stack.Screen
          name={SCREEN_NAMES.ACCOUNT_MODAL}
          component={AccountModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
