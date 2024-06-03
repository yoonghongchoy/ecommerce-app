import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Input, Text} from '../../../shared/components';
import {Colors, Spacing} from '../../../shared/styles';
import {ProductSelectors} from '../selectors';
import {ProductActions} from '../actions';
import {Product} from '../../../api/products/types';

const HomeScreen: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const products = useSelector(ProductSelectors.products);
  const loading = useSelector(ProductSelectors.loading);
  const error = useSelector(ProductSelectors.error);

  useEffect(() => {
    dispatch(ProductActions.fetchProductsRequest());
  }, [dispatch]);

  const renderItem = ({item}: {item: Product}) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
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
      {loading ? (
        <ActivityIndicator size={'large'} color={Colors.accent} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      )}
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
