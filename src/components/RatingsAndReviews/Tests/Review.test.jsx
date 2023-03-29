import React from 'react';
import 'react-dom';
import { render } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import Review from '../Reviews/Review';

const review = {
  review_id: 1176354,
  rating: 4,
  summary: 'I love kitties',
  recommend: true,
  response: null,
  body: 'I love kitties! I love kitties! I love kitties! I love kitties! ',
  date: '2022-04-14T00:00:00.000Z',
  reviewer_name: 'kitty',
  helpfulness: 35,
  photos: [
    {
      id: 2259505,
      url: 'https://res.cloudinary.com/cloverhong/image/upload/v1649959865/vrxnynrz7wwvbmoybntc.jpg',
    },
  ],
};

test('loads and displays Review', async () => {
  const { getByText } = render(<Review review={review} />);

  expect(getByText(review.summary)).toBeInTheDocument();
  expect(getByText('✓ I recommend this product')).toBeInTheDocument();
});
