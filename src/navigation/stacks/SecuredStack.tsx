import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import React, {JSX} from 'react';
import {SCREEN_NAMES} from '../../constants/screens';
import HomeScreen from "../screens/main/HomeScreen";
import ModalScreen from "../screens/main/Modal";

const Stack = createStackNavigator();

const SecuredStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.HOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen
          name={SCREEN_NAMES.HOME_SCREEN}
          component={HomeScreen}
          // options={{headerShown: false}}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen
        name={SCREEN_NAMES.MODAL}
        component={ModalScreen}
        // options={{headerShown: false}}
      />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SecuredStack;
