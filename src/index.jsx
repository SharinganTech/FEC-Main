import React from 'react';
import './styles.css';
import { render } from 'react-dom';
import App from './components/App';
import { ProductProvider } from './contexts/ProductContext';

render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('root'),
);
