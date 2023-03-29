import React from 'react';
import axios from 'axios';
import 'react-dom';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import {
  test, expect, jest, describe, beforeEach,
} from '@jest/globals';
import '@testing-library/jest-dom';
import RatingsAndReviews from '../RatingsAndReviews';
import ProductContext from '../../../contexts/ProductContext';
import { FiltersProvider } from '../FiltersContext';
import { reviews, reviewsMeta } from './proxyData';

jest.mock('axios');

describe('RatingsAndReviews component', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  test('should load and displays ratings and reviews', async () => {
    const product = { id: 40346 };
    axios.get.mockResolvedValueOnce({ data: reviewsMeta });
    axios.get.mockResolvedValueOnce({ data: reviews });

    render(
      <ProductContext.Provider value={product}>
        <FiltersProvider>
          <RatingsAndReviews />
        </FiltersProvider>
      </ProductContext.Provider>,
    );

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2));

    expect(screen.getByText('RATINGS & REVIEWS')).toBeInTheDocument();
    expect(screen.getByText(reviews.results[0].summary)).toBeInTheDocument();
  });
});
