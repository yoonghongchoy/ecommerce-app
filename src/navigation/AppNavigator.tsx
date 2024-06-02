import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {HomeScreen} from '../features/Products';

const Stack = createNativeStackNavigator();

const App: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default App;
