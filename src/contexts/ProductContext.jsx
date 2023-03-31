import React, { createContext, useState, useMemo } from 'react';

export const ProductContext = createContext({});

export function ProductProvider({ children }) {
  const [reviewsMeta, setReviewsMeta] = useState({});
  const [product, setProduct] = useState({});

  const value = useMemo(() => ({
    reviewsMeta, setReviewsMeta, product, setProduct,
  }), [reviewsMeta, product]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}
