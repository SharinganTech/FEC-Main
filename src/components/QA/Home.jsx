import React, { useContext } from 'react';
// import axios from 'axios';
import { ProductContext } from '../../contexts/ProductContext';
import QList from './Questions/QList';

function Home() {
  const { product } = useContext(ProductContext);
  // const prodId = useContext(ProductContext);

  return (
    <div>
      {!product.id ? <div data-testid="q-loading">Loading...</div> : <QList prodInfo={product} />}
    </div>
  );
}

export default Home;
