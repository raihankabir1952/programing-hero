import { use, useState } from 'react';
import CountryCard from './CountryCard';
import type { Country } from '../types/country.types';

type CountryListProps = {
  countriesPromise: Promise<{
    countries: Country[];
  }>;
};

function CountryList({ countriesPromise }: CountryListProps) {
  const data = use(countriesPromise);
  const countries = data.countries;

  const [visitedCountries, setVisitedCountries] = useState<Country[]>([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');

  const handleVisited = (country: Country, isVisited: boolean) => {
    if (isVisited) {
      setVisitedCountries((previous) => [...previous, country]);
    } else {
      setVisitedCountries((previous) =>
        previous.filter(
          (item) => item.name.common !== country.name.common
        )
      );
    }
  };

  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRegion =
      region === 'All' || country.region.region === region;

    return matchesSearch && matchesRegion;
  });

  const listItems = filteredCountries.map((country) => (
    <CountryCard
      key={country.name.common}
      country={country}
      onVisited={handleVisited}
    />
  ));

  return (
    <div>
      <h2>Explore Countries</h2>

      {/* Sticky Controls */}
      <div className="sticky-controls">
        {/* Statistics */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">🌍</div>

            <div>
              <p>Total Countries</p>
              <h3>{countries.length}</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>

            <div>
              <p>Visited</p>
              <h3>{visitedCountries.length}</h3>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔎</div>

            <div>
              <p>Showing</p>
              <h3>{filteredCountries.length}</h3>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Search country..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        {/* Region Filter */}
        <div className="region-filter">
          <label htmlFor="region">
            Filter by Region:
          </label>

          <select
            id="region"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option value="All">All Regions</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>

      {/* Visited Countries */}
      <div className="visited-count">
        <h3>Visited Countries</h3>

        {visitedCountries.length > 0 ? (
          <p>
            {visitedCountries
              .map((country) => country.name.common)
              .join(', ')}
          </p>
        ) : (
          <p>No countries visited yet.</p>
        )}
      </div>

      {/* Country List */}
      <div className="country-list">
        {listItems}
      </div>

      {/* No Result */}
      {filteredCountries.length === 0 && (
        <div className="no-result">
          <div>🔍</div>
          <h3>No countries found</h3>
          <p>Try a different country name or region.</p>
        </div>
      )}
    </div>
  );
}

export default CountryList;