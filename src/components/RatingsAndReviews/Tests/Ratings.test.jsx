/* eslint-disable no-undef */
import React from 'react';
import 'react-dom';
import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Ratings from '../Ratings/Ratings';
import { FiltersProvider } from '../FiltersContext';
import { reviewsMeta } from '../proxyData';

test('loads and displays Ratings', async () => {
  const { getByText } = render(
    <FiltersProvider>
      <Ratings reviewsMeta={reviewsMeta} />
    </FiltersProvider>,
  );

  expect(getByText('RATINGS & REVIEWS')).toBeInTheDocument();
});
