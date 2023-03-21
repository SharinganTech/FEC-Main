import React, { useContext } from 'react';
// import axios from 'axios';
import ProductContext from '../../contexts/ProductContext';
import QList from './QList';

function Home() {
  const prodId = useContext(ProductContext);

  return (
    <div>
      {prodId === 0 ? <div>Loading...</div> : <QList prodId={prodId} />}
    </div>
  );
}

export default Home;
