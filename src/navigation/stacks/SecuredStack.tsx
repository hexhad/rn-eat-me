import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import React, {JSX} from 'react';
import {SCREEN_NAMES} from '../../constants/screens';
import HomeScreen from "../screens/main/HomeScreen";
import InfoModal from "../screens/Modal/InfoModal";
import SearchModal from "../screens/Modal/SearchModal";
import AccountModal from "../screens/Modal/AccountModal";
import ShippingModal from "../screens/Modal/ShippingModal";

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
        name={SCREEN_NAMES.INFO_MODAL}
        component={InfoModal}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAMES.SEARCH_MODAL}
        component={SearchModal}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAMES.ACCOUNT_MODAL}
        component={AccountModal}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREEN_NAMES.DELIVERY_MODAL}
        component={ShippingModal}
        // options={{headerShown: false}}
      />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SecuredStack;
