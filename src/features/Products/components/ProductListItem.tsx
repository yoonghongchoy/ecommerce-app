import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {Product} from '../../../api/products/types';
import {Text} from '../../../shared/components';
import {Colors, Spacing} from '../../../shared/styles';

interface IProps {
  product: Product;
  onPress: VoidFunction;
}

const ProductListItem: React.FC<IProps> = ({product, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text type="subheadline" style={styles.title}>
          {product.title}
        </Text>
        <Text type="body" style={styles.price}>
          ${product.price.toFixed(2)}
        </Text>
        <Text type="body" style={styles.description} numberOfLines={2}>
          {product.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: Spacing.S_2,
    backgroundColor: Colors.backgroundSecondary,
    borderRadius: 8,
    marginBottom: Spacing.S_2,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: Spacing.S_2,
  },
  infoContainer: {
    flex: 1,
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
});

export default ProductListItem;
