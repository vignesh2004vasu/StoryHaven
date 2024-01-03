import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import bookReducer from './BookSlice';
import cartReducer from './CartSlice';
const rootReducer = combineReducers({
  book: bookReducer,
  cart: cartReducer,
  
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
