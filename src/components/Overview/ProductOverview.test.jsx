import React from 'react';
import 'react-dom';
import { rencer, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductOverview from './ProductOverview';

const exampleProd = {
  slogan: 'example slogan',
  description: 'example description',
};

test('loads and displays AList', async () => {
  render(<ProductOverview exampleProd={exampleProd} />);
  const body = await screen.getByTestId('des-slogan');
  expect(body).toHaveTextContent('example slogan');
});

// test('should increment helpful', async () => {
//   render(<AListEntries eachA={eachA} />);
//   // expect(body).toHaveTextContent('hehe');
//   const span = await screen.getByTestId('helpful-span');
//   const btn = await screen.getByTestId('increment-btn');
//   userEvent.click(btn);

//   await waitFor(() => {
//     expect(span).toHaveTextContent(`Yes (${eachA.helpfulness + 1})`);
//   });
// });