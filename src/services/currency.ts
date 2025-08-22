import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../const';
import type {
  CurrenciesResponse,
  LatestExchangeRateResponse,
} from '../types/types';

export const currencyApi = createApi({
  reducerPath: 'currencyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.freecurrencyapi.com/v1/' }),
  endpoints: (builder) => ({
    getLatestExchangeRates: builder.query<LatestExchangeRateResponse, void>({
      query: () => `latest?apikey=${API_KEY}`,
    }),
    getCurrencies: builder.query<CurrenciesResponse, void>({
      query: () => `currencies?apikey=${API_KEY}`,
    }),
  }),
});

export const { useGetLatestExchangeRatesQuery, useGetCurrenciesQuery } =
  currencyApi;
