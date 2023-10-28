import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SecuredStack from './navigation/stacks/SecuredStack';
import {Provider} from 'react-redux';
import {buildProvidersTree} from './services/mainProvider';
import { persistor, store } from "./redux/store";
import { navigationRef as ref } from "./navigation/rootNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AuthStack from "./navigation/stacks/AuthStack";
import RootStack from "./navigation/stacks/RootStack";
import { PersistGate } from "redux-persist/integration/react";



const App = (): JSX.Element => {
  const ProviderTree = buildProvidersTree([
    [PersistGate, { persistor, loading:null}],
    [Provider, {store}],
    [NavigationContainer, {ref}],
  ]);

  return (
    <ProviderTree>
      <RootStack/>
    </ProviderTree>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default App;
