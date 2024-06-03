import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MainTabNavigator from './MainTabNavigator';
import {ProductDetailsScreen} from '../features/Products';

import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{title: 'Product Details'}}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
