import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Product} from '../api/products/types';

export type RootStackParamList = {
  Home: never;
  ProductDetails: {product: Product};
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
