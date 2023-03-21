import React, { useContext } from 'react';
// import axios from 'axios';
import { ProductContext } from '../App';
import QAHome from './QAHome';

function QAApp() {
  const prodId = useContext(ProductContext);
  // const prodId = 40344;

  return (
    <div>
      {prodId}
      {prodId === 0 ? <div>Loading...</div> : <QAHome prodId={prodId} />}
    </div>
  );
}

export default QAApp;
