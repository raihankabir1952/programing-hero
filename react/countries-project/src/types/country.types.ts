export type Currency = {
  name: string;
  symbol: string;
};

export type CurrencyData = {
  [key: string]: Currency;
};

export type Country = {
  name: {
    common: string;
    official: string;
  };

  flags: {
    flags: {
      png: string;
    };
  };

  capital: {
    capital: string[];
  };

  currencies: {
    currencies: CurrencyData;
  };

  ccn3: {
    ccn3: string;
  };

  region: {
    region: string;
  };
};