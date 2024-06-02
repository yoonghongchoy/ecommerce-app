import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const App: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;
