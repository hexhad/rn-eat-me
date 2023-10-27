import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import React, {JSX} from 'react';
import {SCREEN_NAMES} from '../../constants/screens';
import HomeScreen from "../screens/main/HomeScreen";
import InfoModal from "../screens/Modal/InfoModal";
import SearchModal from "../screens/Modal/SearchModal";
import AccountModal from "../screens/Modal/AccountModal";
import ShippingModal from "../screens/Modal/ShippingModal";
import LoginScreen from "../screens/auth/LoginScreen";

const Stack = createStackNavigator();

const AuthStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={SCREEN_NAMES.LOGIN}
          component={LoginScreen}
          // options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
