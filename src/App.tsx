import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './store/store';
import {UserProvider} from './context/userContext';

const App: React.FC<never> = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </UserProvider>
    </Provider>
  );
};

export default App;
