import React, { useContext } from 'react';
// import axios from 'axios';
import ProductContext from '../../contexts/ProductContext';
import QList from './Questions/QList';

function Home() {
  const product = useContext(ProductContext);
  const productDes = { product };
  const prodInfo = productDes.product;
  // const prodId = useContext(ProductContext);

  return (
    <div>
      {!prodInfo.id ? <div data-testid="q-loading">Loading...</div> : <QList prodInfo={prodInfo} />}
    </div>
  );
}

export default Home;
