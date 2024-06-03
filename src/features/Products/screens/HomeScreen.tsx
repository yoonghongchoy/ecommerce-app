import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Input, Text} from '../../../shared/components';
import {Colors, Spacing} from '../../../shared/styles';
import {ProductSelectors} from '../selectors';
import {ProductActions} from '../actions';
import {Product} from '../../../api/products/types';
import {ProductListItem} from '../components';

const HomeScreen: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const products = useSelector(ProductSelectors.products);
  const loading = useSelector(ProductSelectors.loading);
  const error = useSelector(ProductSelectors.error);

  useEffect(() => {
    dispatch(ProductActions.fetchProductsRequest());
  }, [dispatch]);

  const renderItem = ({item}: {item: Product}) => {
    return (
      <ProductListItem
        product={item}
        onPress={() => {
          navigation.navigate('ProductDetails', {product: item});
        }}
      />
    );
  };

  const renderContent = () => {
    if (loading) {
      return <ActivityIndicator size={'large'} color={Colors.accent} />;
    }

    if (error) {
      return <Text style={styles.error}>{error}</Text>;
    }

    // TODO: Optimizations and refresh control
    return (
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text type={'headline'} style={styles.header}>
        Product List
      </Text>
      <Input
        placeholder={'Search products...'}
        value={''}
        onChangeText={undefined}
      />
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing.S_2,
    backgroundColor: Colors.backgroundPrimary,
  },
  header: {
    marginBottom: Spacing.S_2,
  },
  error: {
    color: Colors.error,
    textAlign: 'center',
    marginTop: Spacing.S_2,
  },
});

export default HomeScreen;
