import {combineReducers} from '@reduxjs/toolkit';
import {productReducers} from '../features/Products';

const rootReducer = combineReducers({
  productReducers,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
