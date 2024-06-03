import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Input, Text} from '../../../shared/components';
import {Colors, Spacing} from '../../../shared/styles';
import {ProductSelectors} from '../selectors';
import {ProductActions} from '../actions';
import {Product} from '../../../api/products/types';
import {ProductListItem} from '../components';
import {useDebounce} from '../../../shared/utils';

const HomeScreen: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const allProducts = useSelector(ProductSelectors.products);
  const filteredProducts = useSelector(ProductSelectors.filteredProducts);
  const loading = useSelector(ProductSelectors.loading);
  const error = useSelector(ProductSelectors.error);

  const [query, setQuery] = React.useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    dispatch(ProductActions.fetchProductsRequest());
  }, [dispatch]);

  /**
   * Use debounce to prevent excessive operations
   */
  useEffect(() => {
    if (debouncedQuery) {
      dispatch(ProductActions.searchProductsRequest(debouncedQuery));
    } else {
      // Reset when query is empty
      dispatch(
        ProductActions.searchProductsSuccess({query: '', results: allProducts}),
      );
    }
  }, [debouncedQuery, dispatch, allProducts]);

  const handleSearch = (text: string) => {
    setQuery(text);
  };

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
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text type={'headline'} style={styles.header}>
          Product List
        </Text>
        <Input
          placeholder={'Search products...'}
          value={query}
          onChangeText={handleSearch}
        />
        {renderContent()}
      </View>
    </TouchableWithoutFeedback>
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
