import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ReviewList from './ReviewList';

test('loads and displays reviews section', async () => {
  // const { queryByText } =
  render(<ReviewList prodID={40344} />);
  const childElement = await screen.getByTestId('reviews-list');

  // await userEvent.click(screen.getByText('MORE REVIEWS'));
  // const items = await screen.findAllByText('I recommend this product');
  // expect(items).toHaveLength(4);
  await waitFor(() => expect(childElement).toBeInTheDocument());
});
