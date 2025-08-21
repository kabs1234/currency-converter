import type { SelectChangeEvent } from '@mui/material';
import type { ChangeEvent } from 'react';

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

export type CurrenciesExchangeRate = Record<string, number>;

export type LatestExchangeRateResponse = {
  data: CurrenciesExchangeRate;
};

export type HistoricalExchangeRateResponse = {
  data: Record<string, CurrenciesExchangeRate>;
};

export type CurrenciesResponse = Record<string, Currency>;

export type CurrencySelectorProps = {
  currency: string;
  onCurrencyChange: (evt: SelectChangeEvent) => void;
  selectorType: 'from' | 'to';
};

export type AmountFieldProps = {
  amountValue: number;
  onAmountChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
