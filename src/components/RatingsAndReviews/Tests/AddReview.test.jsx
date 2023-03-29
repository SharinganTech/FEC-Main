import React from 'react';
import 'react-dom';
import {
  render, fireEvent,
} from '@testing-library/react';
import { test, expect } from '@jest/globals';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddReview from '../Reviews/AddReviews/AddReview';
import ProductContext from '../../../contexts/ProductContext';
import { reviewsMeta } from './proxyData';

const product = 40346;

test('loads and displays AddReview', async () => {
  const { getByText, queryByText } = render(
    <ProductContext.Provider value={product}>
      <AddReview reviewsMeta={reviewsMeta} />
    </ProductContext.Provider>,
  );

  expect(queryByText('Write Your Review')).not.toBeInTheDocument();

  fireEvent.click(getByText('ADD A REVIEW +'));

  expect(queryByText('Write Your Review')).toBeInTheDocument();

  fireEvent.click(getByText('X'));

  expect(queryByText('Write Your Review')).not.toBeInTheDocument();
});
