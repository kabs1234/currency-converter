import type { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useState, type ReactElement } from 'react';
import CurrencyField from '../components/currency-field/currency-field';
import type { AmountFieldProps, CurrencySelectorProps } from '../types/types';

export default function Index(): ReactElement {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [fromCurrencyValue, setFromCurrencyValue] = useState<number>(0);

  const onCurrencyChange = (evt: SelectChangeEvent): void => {
    setFromCurrency(evt.target.value);
  };

  const onFromAmountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setFromCurrencyValue(Number(evt.target.value));
  };

  const fromAmountProperties: AmountFieldProps = {
    amountValue: fromCurrencyValue,
    onAmountChange: onFromAmountChange,
  };

  const fromSelectorProperties: CurrencySelectorProps = {
    currency: fromCurrency,
    onCurrencyChange: onCurrencyChange,
    selectorType: 'from',
  };

  return (
    <Box className="mt-3 mr-5 ml-5">
      <CurrencyField
        amountProperties={fromAmountProperties}
        selectorProperties={fromSelectorProperties}
      />
    </Box>
  );
}
