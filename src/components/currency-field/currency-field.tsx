import { Box, TextField, Divider } from '@mui/material';
import type { ReactElement } from 'react';
import CurrencySelector from '../currency-selector/currency-selector';
import type {
  AmountFieldProps,
  CurrencySelectorProps,
} from '../../types/types';

export type CurrencyFieldProps = {
  amountProperties: AmountFieldProps;
  selectorProperties: CurrencySelectorProps;
};

export default function CurrencyField({
  amountProperties,
  selectorProperties,
}: CurrencyFieldProps): ReactElement {
  return (
    <Box className="flex mb-5 p-2 pb-0 border-1 rounded-xs">
      <TextField
        className="w-1/2"
        label="Amount"
        variant="standard"
        placeholder="from"
        slotProps={{ input: { disableUnderline: true } }}
        value={amountProperties.amountValue}
        onChange={amountProperties.onAmountChange}
      />

      <Divider orientation="vertical" variant="middle" flexItem />

      <CurrencySelector
        currency={selectorProperties.currency}
        onCurrencyChange={selectorProperties.onCurrencyChange}
        selectorType={selectorProperties.selectorType}
        currenciesList={selectorProperties.currenciesList}
      />
    </Box>
  );
}
