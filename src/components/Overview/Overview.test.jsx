import React from 'react';
import 'react-dom';
import { render, screen, waitFor, act } from '@testing-library/react';
import { test } from '@jest/globals';
import '@testing-library/jest-dom';
import axios from 'axios';
import Overview from './Overview';
import ProductContext from '../../contexts/ProductContext';

const exampleFeatures = [
  { feature: '1', value: '1' },
  { feature: '2', value: '2' },
  { feature: '3', value: '3' },
];

const styles = {
  product_id: 40346,
  results: [
    {
      style_id: 240525,
      name: 'test name',
      original_price: '99.99',
      photos: [
        {
          thumbail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
      sale_price: null,
      skus: {
        1394895: { quantity: 14, size: '7' },
        1394896: { quantity: 14, size: '8' },
      },
    },
  ],
};

const meta = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
};

jest.mock('axios');

describe('RatingsAndReviews component', () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  test('should load the product information', async () => {
    const product = { id: 40346 };
    axios.get.mockResolvedValueOnce({ data: { features: exampleFeatures } });
    axios.get.mockResolvedValueOnce({ data: styles });
    axios.get.mockResolvedValueOnce({ data: { ratings: meta } });

    await act(async () => {
      render(
        <ProductContext.Provider value={product}>
          <Overview />
        </ProductContext.Provider>,
      );
    });

    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(3));

    expect(screen.getByText('test name')).toBeInTheDocument();
  });
});
