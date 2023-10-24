import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SecuredStack from './navigation/stacks/SecuredStack';
import {Provider} from 'react-redux';
import {buildProvidersTree} from './services/mainProvider';
import {store} from './redux/store';
import { navigationRef as ref } from "./navigation/rootNavigation";


const App = (): JSX.Element => {
  const ProviderTree = buildProvidersTree([
    [Provider, {store}],
    [NavigationContainer, {ref}],
  ]);

  return (
    <ProviderTree>
      <SecuredStack />
    </ProviderTree>
  );
};

const styles = StyleSheet.create({
  dummy: {
    backgroundColor: 'red',
  },
});

export default App;
