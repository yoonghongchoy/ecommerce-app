import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import HomeScreen from '../screens/HomeScreen';
import {Product} from '../../../api/products/types';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));

const mockStore = configureStore([]);

const mockProducts: Product[] = [
  {
    id: 1,
    title: 'Product 1',
    price: 10,
    description: 'Description 1',
    category: 'Category 1',
    image: 'image1',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 20,
    description: 'Description 2',
    category: 'Category 2',
    image: 'image2',
  },
];

describe('HomeScreen', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      products: {
        products: [],
        filteredProducts: [],
        loading: false,
        error: null,
      },
    });
  });

  it('renders without crashing', () => {
    const {getByText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    expect(getByText('Product List')).toBeTruthy();
  });

  it('updates search query on text change', () => {
    const {getByPlaceholderText} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const searchInput = getByPlaceholderText('Search products...');
    fireEvent.changeText(searchInput, 'test');

    expect(searchInput.props.value).toBe('test');
  });

  it('renders ProductListItem for each product', () => {
    store = mockStore({
      products: {
        products: mockProducts,
        filteredProducts: mockProducts,
        loading: false,
        error: null,
      },
    });

    const {getAllByTestId} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );

    const productItems = getAllByTestId('product-list-item');
    expect(productItems.length).toBe(2);
  });
});
