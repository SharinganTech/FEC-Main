/* eslint-disable no-undef */
import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import RatingsAndReviews from './RatingsAndReviews';

test('loads and displays Review', async () => {
  const { getByText } = render(<RatingsAndReviews />);

  expect(getByText('RATINGS & REVIEWS')).toBeInTheDocument();
});
