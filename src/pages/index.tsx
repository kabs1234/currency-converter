import type { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useState, type ReactElement } from 'react';
import CurrencyField from '../components/currency-field/currency-field';
import {
  createAmountObjectProps,
  createCurrencySelectorObjectProps,
} from '../utils/utils';

export default function Index(): ReactElement {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [fromAmount, setFromAmount] = useState<number>(0);

  const [toCurrency, setToCurrency] = useState<string>('');
  const [toAmount, setToAmount] = useState<number>(0);

  const onToCurrencyChange = (evt: SelectChangeEvent): void => {
    setToCurrency(evt.target.value);
  };

  const onToAmountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setToAmount(Number(evt.target.value));
  };

  const onFromCurrencyChange = (evt: SelectChangeEvent): void => {
    setFromCurrency(evt.target.value);
  };

  const onFromAmountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setFromAmount(Number(evt.target.value));
  };

  return (
    <Box className="mt-3 mr-5 ml-5">
      <CurrencyField
        amountProperties={createAmountObjectProps(
          fromAmount,
          onFromAmountChange
        )}
        selectorProperties={createCurrencySelectorObjectProps(
          fromCurrency,
          onFromCurrencyChange,
          'from'
        )}
      />

      <CurrencyField
        amountProperties={createAmountObjectProps(toAmount, onToAmountChange)}
        selectorProperties={createCurrencySelectorObjectProps(
          toCurrency,
          onToCurrencyChange,
          'to'
        )}
      />
    </Box>
  );
}
