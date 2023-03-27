import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ReviewList from './ReviewList';

const reviewsMeta = {
  product_id: '40346',
  ratings: {
    1: '22',
    2: '50',
    3: '46',
    4: '35',
    5: '83',
  },
  recommended: {
    false: '66',
    true: '170',
  },
  characteristics: {
    Fit: {
      id: 135224,
      value: '2.7108433734939759',
    },
    Length: {
      id: 135225,
      value: '3.1538461538461538',
    },
    Comfort: {
      id: 135226,
      value: '3.0601092896174863',
    },
    Quality: {
      id: 135227,
      value: '3.4325842696629213',
    },
  },
};

test('loads and displays AList', async () => {
  const renderedList = render(<ReviewList prodID={40344} reviewsMeta={reviewsMeta} />);
  const body = await screen.getByTestId('answers-body');
  screen.debug();
  expect(body).toHaveTextContent('hehe');
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
