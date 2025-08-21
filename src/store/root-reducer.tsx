import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { currenciesSlice } from './currencies/currencies';
import { convertionsHistorySlice } from './conversion-history/conversion-history.slice';
import { currencyApi } from '../services/currency';

export const rootReducer = combineReducers({
  [NameSpace.Currencies]: currenciesSlice.reducer,
  [NameSpace.ConversionsHistory]: convertionsHistorySlice.reducer,
  [currencyApi.reducerPath]: currencyApi.reducer,
});
