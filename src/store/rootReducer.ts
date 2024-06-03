import {combineReducers} from '@reduxjs/toolkit';
import products from '../features/Products/reducers';

const rootReducer = combineReducers({
  products,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
