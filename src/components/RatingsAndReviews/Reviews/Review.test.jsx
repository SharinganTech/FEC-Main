import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Review from './Review';

const review = {
  "review_id": 1176354,
  "rating": 4,
  "summary": "I love kitties",
  "recommend": true,
  "response": null,
  "body": "I love kitties! I love kitties! I love kitties! I love kitties! ",
  "date": "2022-04-14T00:00:00.000Z",
  "reviewer_name": "kitty",
  "helpfulness": 35,
  "photos": [
      {
          "id": 2259505,
          "url": "https://res.cloudinary.com/cloverhong/image/upload/v1649959865/vrxnynrz7wwvbmoybntc.jpg"
      }
  ]
},

test('loads and displays Review', async () => {
  render(<Review review={review} />);
  const title = await screen.getByTestId('answers-title');
  const body = await screen.getByTestId('answers-body');
  const answerer = await screen.getByTestId('answerers-name');
  const date = await screen.getByTestId('answers-date');

  expect(title).toHaveTextContent('A:');
  expect(body).toHaveTextContent('What\'s good');
  expect(answerer).toHaveTextContent('Seller');
  expect(date).toHaveTextContent('March 24, 2023');
});

test('loads and displays reviews section', async () => {
  // const { queryByText } =
  render(<ReviewList prodID={40344} reviewsMeta={reviewsMeta} />);
  const childElement = await screen.getByTestId('reviews-list');

  // await userEvent.click(screen.getByText('MORE REVIEWS'));
  // const items = await screen.findAllByText('I recommend this product');
  // expect(items).toHaveLength(4);
  await waitFor(() => expect(childElement).toBeInTheDocument());
});
