import type {
  CurrenciesResponse,
  HistoricalExchangeRateResponse,
  LatestExchangeRateResponse,
} from '../types/types';

class Freecurrencyapi {
  baseUrl = 'https://api.freecurrencyapi.com/v1/';
  headers: { apikey: string };

  constructor(apiKey = '') {
    this.headers = {
      apikey: apiKey,
    };
  }

  async call<T>(endpoint: string, params?: object): Promise<T> {
    const paramString = new URLSearchParams({
      ...params,
    }).toString();

    const response = await fetch(`${this.baseUrl}${endpoint}?${paramString}`, {
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return (await response.json()) as T;
  }

  currencies(params?: object) {
    return this.call<CurrenciesResponse>('currencies', params);
  }

  latest(params?: object) {
    return this.call<LatestExchangeRateResponse>('latest', params);
  }

  historical(params?: object) {
    return this.call<HistoricalExchangeRateResponse>('historical', params);
  }
}

export default Freecurrencyapi;
