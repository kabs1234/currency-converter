import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { type ReactElement } from 'react';
import type { CurrencySelectorProps } from '../../types/types';

export default function CurrencySelector({
  currency,
  onCurrencyChange,
  selectorType,
  currenciesList,
}: CurrencySelectorProps): ReactElement {
  return (
    <FormControl className="w-1/2">
      <InputLabel id={`${selectorType}-currency-label`}>Currency</InputLabel>
      <Select
        labelId={`${selectorType}-currency-label`}
        id={`${selectorType}-currency`}
        value={currency}
        label={`${selectorType}-currency`}
        onChange={onCurrencyChange}
        sx={{
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },
          '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              border: 0,
            },
        }}
      >
        {Object.entries(currenciesList).map(([code, currency]) => {
          return <MenuItem value={code}>{currency.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}
