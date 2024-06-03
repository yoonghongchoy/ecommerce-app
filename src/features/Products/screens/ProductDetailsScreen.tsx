import React from 'react';
import {StyleSheet, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RootStackScreenProps} from '../../../navigation/types';

import {Text} from '../../../shared/components';
import {Colors, Spacing} from '../../../shared/styles';

const ProductDetailsScreen: React.FC<{}> = ({}) => {
  const route = useRoute<RootStackScreenProps<'ProductDetails'>['route']>();
  const product = route.params.product;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text type={'headline'} style={styles.title}>
        {product.title}
      </Text>
      <Text type={'body'} style={styles.price}>
        ${product.price.toFixed(2)}
      </Text>
      <Text type={'body'} style={styles.description}>
        {product.description}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: Spacing.S_2,
    backgroundColor: Colors.backgroundPrimary,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: Spacing.S_2,
  },
  title: {
    marginBottom: Spacing.S_1,
    color: Colors.contentPrimary,
  },
  price: {
    marginBottom: Spacing.S_1,
    color: Colors.accent,
  },
  description: {
    color: Colors.contentSecondary,
  },
  error: {
    color: Colors.error,
    textAlign: 'center',
    marginTop: Spacing.S_2,
  },
});

export default ProductDetailsScreen;
