import {combineReducers} from '@reduxjs/toolkit';
import {products} from '../features/Products';
import {user} from '../features/UserProfile';

const rootReducer = combineReducers({
  products,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
