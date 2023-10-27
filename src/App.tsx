import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SecuredStack from './navigation/stacks/SecuredStack';
import {Provider} from 'react-redux';
import {buildProvidersTree} from './services/mainProvider';
import {store} from './redux/store';
import { navigationRef as ref } from "./navigation/rootNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStack from "./navigation/stacks/AuthStack";



const App = (): JSX.Element => {
  const ProviderTree = buildProvidersTree([
    [Provider, {store}],
    [NavigationContainer, {ref}],
  ]);

  return (
    <ProviderTree>
      {/*<SecuredStack />*/}
      <AuthStack/>
    </ProviderTree>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default App;
