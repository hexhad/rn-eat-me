import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import React, {JSX} from 'react';
import {SCREEN_NAMES} from '../../constants/screens';

const Stack = createStackNavigator();

const SecuredStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.BOTTOM_NAV}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SCREEN_NAMES.BOTTOM_NAV}
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default SecuredStack;
