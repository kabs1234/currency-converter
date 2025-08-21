import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import type { CurrenciesExchangeRate, Currency } from '../../types/types';

export type CurrenciesSlice = {
  currencies: Currency[];
  exchangeRates: CurrenciesExchangeRate;
};

const initialState = {
  currencies: [],
  exchangeRates: [],
};

export const currenciesSlice = createSlice({
  name: NameSpace.Currencies,
  initialState,
  reducers: {},
});
