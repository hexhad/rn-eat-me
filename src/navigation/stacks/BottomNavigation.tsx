import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/main/HomeScreen';
import DummySc from '../screens/main/DummyScreen';
import {SCREEN_NAMES} from '../../constants/screens';

export default () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={SCREEN_NAMES.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.EXTRA_SCREEN}
        component={DummySc}
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};
