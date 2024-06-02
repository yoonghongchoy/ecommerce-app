import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {HomeScreen} from '../features/Home';

const Stack = createNativeStackNavigator();

const App: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default App;
