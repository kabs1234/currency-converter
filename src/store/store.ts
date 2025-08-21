import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { currencyApi } from '../services/currency';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(currencyApi.middleware),
});
