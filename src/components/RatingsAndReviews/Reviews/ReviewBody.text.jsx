import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ReviewBody from './Review';

const reviewSummary = 'This is a solid product';
const reviewBody = 'These shoes make me run faster and I would definitely recommend them to anyone who likes shoes and going fast. Definitely recommend these shoes!';
const reviewPhotos = [
  {
    id: 2259505,
    url: 'https://res.cloudinary.com/cloverhong/image/upload/v1649959865/vrxnynrz7wwvbmoybntc.jpg',
  },
];
const recommended = true;

test('loads and displays Review', async () => {
  render(<ReviewBody
    reviewSummary={reviewSummary}
    reviewBody={reviewBody}
    reviewPhotos={reviewPhotos}
    recommended={recommended}
  />);
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
