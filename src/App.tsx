import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './features/Home/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App: React.FC<never> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
