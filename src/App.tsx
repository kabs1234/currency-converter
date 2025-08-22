import type { ReactElement } from 'react';
import Index from './pages';
import {
  useGetCurrenciesQuery,
  useGetLatestExchangeRatesQuery,
} from './services/currency';
import Error from './components/error/error';
import Loader from './components/loader/loader';

export default function App(): ReactElement {
  const exchangeRatesResponse = useGetLatestExchangeRatesQuery();
  const currenciesResponse = useGetCurrenciesQuery();

  if (exchangeRatesResponse.isLoading || currenciesResponse.isLoading) {
    return <Loader />;
  }

  if (exchangeRatesResponse.data && currenciesResponse.data) {
    return (
      <Index
        exchangeRates={exchangeRatesResponse.data}
        currencies={currenciesResponse.data}
      />
    );
  }

  return <Error />;
}
