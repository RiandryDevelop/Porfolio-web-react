import { createContext, useContext, useMemo, useState } from 'react';

// A usable default means consumers still render if they end up outside the
// provider, instead of crashing on a destructure of `undefined`.
const SearchContext = createContext({ query: '', setQuery: () => {} });

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  const value = useMemo(() => ({ query, setQuery }), [query]);

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
