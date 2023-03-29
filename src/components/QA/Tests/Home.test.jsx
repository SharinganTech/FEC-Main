import React from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';
import ProductContext from '../../../contexts/ProductContext';
import QList from '../Questions/QList';

describe('Home component', () => {
  test('renders loading message when product info is not available', () => {
    const mockProduct = { id: 0, name: 'Test Product' };
    render(
      <ProductContext.Provider value={mockProduct}>
        <Home />
      </ProductContext.Provider>,
    );
    const loadingMessage = screen.getByTestId('q-loading');
    expect(loadingMessage).toBeInTheDocument();
  });

  test('renders QList component when product info is available', () => {
    const mockProduct = { id: 123, name: 'Test Product' };
    render(
      <ProductContext.Provider value={mockProduct}>
        <Home />
      </ProductContext.Provider>,
    );
    const QListComponent = screen.getByTestId('q-list');
    expect(QListComponent).toBeInTheDocument();
  });
});


// test('loads and displays AList', async () => {
//   render(
//     <ProductContext.Provider value={40362}>
//       <Home />
//     </ProductContext.Provider>,
//   );
//   const loading = screen.getByTestId('home');
//   const homepage = await screen.getByTestId('home');

//   expect(loading).toHaveTextContent('Loading...');
//   expect(homepage).not.toHaveTextContent('Loading...');
// });
