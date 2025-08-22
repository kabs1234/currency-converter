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

export type Currencies = Record<string, Currency>;

export type LatestExchangeRateResponse = {
  data: CurrenciesExchangeRate;
};

export type CurrenciesResponse = {
  data: Currencies;
};

export type CurrencySelectorProps = {
  currency: string;
  onCurrencyChange: (evt: SelectChangeEvent) => void;
  selectorType: 'from' | 'to';
  currenciesList: Currencies;
};

export type AmountFieldProps = {
  amountValue: string;
  onAmountChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
