import React from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from './ProductOverview';
import { CurrentProduct } from './Overview';

const prodDetails = {
  slogan: 'example slogan',
  description: 'example description',
};

test('loads and displays AList', async () => {
  // render(
  //   <CurrentProduct.Provider value={prodDetails}>
  //     <ProductOverview CurrentProduct={prodDetails} />
  //   </CurrentProduct.Provider>,
  // );

  // const body = await screen.getByTestId('des-slogan');

  // expect(body).toHaveTextContent('example slogan');
});
