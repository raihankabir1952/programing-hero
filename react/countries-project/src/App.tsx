import { Suspense } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import type { Country } from './types/country.types';

type CountriesResponse = {
  countries: Country[];
};

function App() {
  const countriesPromise = async (): Promise<CountriesResponse> => {
    const response = await fetch(
      'https://openapi.programming-hero.com/api/all'
    );

    const data = await response.json();

    return data;
  };

  return (
    <div>
      <h1>🌍 Globe Explorer</h1>

      <Suspense fallback={<p>Loading countries...</p>}>
        <CountryList countriesPromise={countriesPromise()} />
      </Suspense>
    </div>
  );
}

export default App;