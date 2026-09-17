import { useState } from 'react';
import type { Country } from '../types/country.types';

type CountryCardProps = {
  country: Country;
  onVisited: (country: Country, isVisited: boolean) => void;
};

function CountryCard({
  country,
  onVisited,
}: CountryCardProps) {
  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    const newVisited = !visited;

    setVisited(newVisited);
    onVisited(country, newVisited);
  };

  return (
    <div
      className={
        visited
          ? 'country-card visited'
          : 'country-card'
      }
    >
      <h3>{country.name.common}</h3>

      <p>
        <strong>Official Name:</strong>{' '}
        {country.name.official}
      </p>

      <p>
        <strong>Country Code:</strong>{' '}
        {country.ccn3.ccn3}
      </p>

      <p>
        <strong>Capital:</strong>{' '}
        {country.capital.capital[0]}
      </p>

      <p>
        <strong>Region:</strong>{' '}
        {country.region.region}
      </p>

      <img
        src={country.flags.flags.png}
        alt={`${country.name.common} flag`}
      />

      <button onClick={handleClick}>
        {visited ? 'Visited ✓' : 'Visited'}
      </button>
    </div>
  );
}

export default CountryCard;