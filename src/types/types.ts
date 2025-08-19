export type LatestExchangeRateResponse = {
  data: CurrenciesExchangeRate;
};

export type HistoricalExchangeRateResponse = {
  data: Record<string, CurrenciesExchangeRate>;
};

export type CurrenciesResponse = Record<string, Currency>;

export type CurrenciesExchangeRate = Record<string, number>;

export type Currency = {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  type: string;
};
