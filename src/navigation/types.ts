import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Product} from '../api/products/types';

// # region Stack Navigator
export type RootStackParamList = {
  Main: never;
  ProductDetails: {product: Product};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
// # endregion

// # region Tab Navigator
export type MainTabParamList = {
  Home: never;
  Profile: never;
  Settings: never;
};
// # endregion

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
