import type { ChangeEvent } from 'react';
import type {
  AmountFieldProps,
  Currencies,
  CurrencySelectorProps,
} from '../types/types';
import type { SelectChangeEvent } from '@mui/material';
import { NUMBER_REG_EXP } from '../const';
import type { Conversion } from '../store/conversion-history/conversion-history.slice';

export const createAmountObjectProps = (
  amountValue: string,
  onAmountChange: (evt: ChangeEvent<HTMLInputElement>) => void
): AmountFieldProps => {
  return {
    amountValue,
    onAmountChange,
  };
};

export const createCurrencySelectorObjectProps = (
  currency: string,
  onCurrencyChange: (evt: SelectChangeEvent) => void,
  selectorType: 'from' | 'to',
  currenciesList: Currencies
): CurrencySelectorProps => {
  return {
    currency,
    onCurrencyChange,
    selectorType,
    currenciesList,
  };
};

export const resetReactStringSetters = (
  ...setters: React.Dispatch<React.SetStateAction<string>>[]
): void => {
  setters.forEach((setter) => {
    setter('');
  });
};

export const isStringNumber = (string: string): boolean => {
  return NUMBER_REG_EXP.test(string);
};

export const createConversionObject = (
  amount: number,
  from: string,
  to: string,
  result: number
): Conversion => {
  return {
    amount,
    from,
    to,
    result,
    date: new Date().toISOString(),
  };
};
