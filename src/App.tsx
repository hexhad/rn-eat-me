import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {buildProvidersTree} from './services/mainProvider';
import {persistor, store} from './redux/store';
import {navigationRef as ref} from './navigation/rootNavigation';
import RootStack from './navigation/stacks/RootStack';
import {PersistGate} from 'redux-persist/integration/react';

const App: React.FC = () => {
  const ProviderTree = buildProvidersTree([
    [PersistGate, {persistor, loading: null}],
    [Provider, {store}],
    [NavigationContainer, {ref}],
  ]);

  return (
    <ProviderTree>
      <RootStack />
    </ProviderTree>
  );
};

export default App;
