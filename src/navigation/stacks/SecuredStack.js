import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SCREEN_NAMES} from '../../constants/screens';
import HomeScreen from '../screens/main/HomeScreen';
import InfoModal from '../screens/Modal/InfoModal';
import SearchModal from '../screens/Modal/SearchModal';
import AccountModal from '../screens/Modal/AccountModal';
import ShippingModal from '../screens/Modal/ShippingModal';
import WebViewModal from '../screens/Modal/WebViewModal';
import ItemModal from '../screens/Modal/ItemModal';
import DummyScreen from "../screens/main/DummyScreen";
import RatingModal from "../screens/Modal/RatingModal";

const Stack = createStackNavigator();

const SecuredStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREEN_NAMES.HOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAMES.EXTRA_SCREEN} component={DummyScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name={SCREEN_NAMES.INFO_MODAL} component={InfoModal} />
        <Stack.Screen name={SCREEN_NAMES.RATING_MODAL} component={RatingModal} />
        <Stack.Screen
          name={SCREEN_NAMES.SEARCH_MODAL}
          component={SearchModal}
        />
        <Stack.Screen
          name={SCREEN_NAMES.ACCOUNT_MODAL}
          component={AccountModal}
        />
        <Stack.Screen
          name={SCREEN_NAMES.DELIVERY_MODAL}
          component={ShippingModal}
        />
        <Stack.Screen name={SCREEN_NAMES.WEB_VIEW} component={WebViewModal} />
        <Stack.Screen name={SCREEN_NAMES.ITEM_MODAL} component={ItemModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default SecuredStack;
