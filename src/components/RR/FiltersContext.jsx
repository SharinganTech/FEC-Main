import React, { createContext, useState, useMemo } from 'react';

export const FiltersContext = createContext({});

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState([]);

  const addFilter = (number) => {
    setFilters([...filters, number]);
  };

  const removeFilter = (number) => {
    setFilters(filters.filter((filterNum) => filterNum !== number));
  };

  const value = useMemo(() => ({ filters, addFilter, removeFilter }), [filters]);

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}
