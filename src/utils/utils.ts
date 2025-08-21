import type { ChangeEvent } from 'react';
import type { AmountFieldProps, CurrencySelectorProps } from '../types/types';
import type { SelectChangeEvent } from '@mui/material';

export const createAmountObjectProps = (
  amountValue: number,
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
  selectorType: 'from' | 'to'
): CurrencySelectorProps => {
  return {
    currency,
    onCurrencyChange,
    selectorType,
  };
};
