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
    getLatestExchangeRates: builder.query<LatestExchangeRateResponse, string>({
      query: () => `latest/${API_KEY}`,
    }),
    getCurrencies: builder.query<CurrenciesResponse, string>({
      query: () => `currencies/${API_KEY}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLatestExchangeRatesQuery } = currencyApi;
