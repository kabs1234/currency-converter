import type { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/material';
import type { ChangeEvent } from 'react';
import { useEffect, useState, type ReactElement } from 'react';
import CurrencyField from '../components/currency-field/currency-field';
import {
  createAmountObjectProps,
  createCurrencySelectorObjectProps,
  isStringNumber,
  resetReactStringSetters,
} from '../utils/utils';
import type {
  CurrenciesResponse,
  LatestExchangeRateResponse,
} from '../types/types';

type IndexPageProps = {
  exchangeRates: LatestExchangeRateResponse;
  currencies: CurrenciesResponse;
};

export default function Index({
  exchangeRates,
  currencies,
}: IndexPageProps): ReactElement {
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [fromAmount, setFromAmount] = useState<string>('');

  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [toAmount, setToAmount] = useState<string>('');

  const [fromExchangeRate, setFromExchangeRate] = useState<number>(0);
  const [toExchangeRate, setToExchangeRate] = useState<number>(0);

  const onFromAmountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const value = evt.target.value;

    if (value === '') {
      resetReactStringSetters(setToAmount, setFromAmount);
      return;
    }

    if (isStringNumber(value)) {
      setFromAmount(value);

      const convertedAmount =
        (Number(value) * toExchangeRate) / fromExchangeRate;
      setToAmount(String(convertedAmount));
    }
  };

  const onToAmountChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const value = evt.target.value;

    if (value === '') {
      resetReactStringSetters(setToAmount, setFromAmount);
      return;
    }

    if (isStringNumber(value)) {
      setToAmount(value);

      const convertedAmount =
        (Number(value) * fromExchangeRate) / toExchangeRate;

      setFromAmount(String(convertedAmount));
    }
  };

  const onToCurrencyChange = (evt: SelectChangeEvent): void => {
    setToCurrency(evt.target.value);
  };

  const onFromCurrencyChange = (evt: SelectChangeEvent): void => {
    setFromCurrency(evt.target.value);
  };

  useEffect(() => {
    setFromExchangeRate(exchangeRates.data[fromCurrency]);
    setToExchangeRate(exchangeRates.data[toCurrency]);
  }, [fromCurrency, toCurrency]);

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
          'from',
          currencies.data
        )}
      />

      <CurrencyField
        amountProperties={createAmountObjectProps(toAmount, onToAmountChange)}
        selectorProperties={createCurrencySelectorObjectProps(
          toCurrency,
          onToCurrencyChange,
          'to',
          currencies.data
        )}
      />
    </Box>
  );
}
