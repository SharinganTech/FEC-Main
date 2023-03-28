import React, { useState } from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import { expect, jest, test } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddToCart from './AddToCart';

const inventory = {
  1: { quantity: 1, size: 'XS' },
  2: { quantity: 15, size: 'S' },
  3: { quantity: 8, size: 'M' },
  4: { quantity: 7, size: 'L' },
  5: { quantity: 10, size: 'XL' },

};

test('Calls the function', async () => {
  render(
    <AddToCart inventory={inventory} />,
  );

  // const handleAddToCart = jest.fn();

  await userEvent.click(screen.getByTestId('addToBag'));
  const body = await screen.getByTestId('favorite');

  // expect(handleAddToCart()).toHaveBeenCalled();
  expect(body).toHaveTextContent('ADD TO FAVORITE +');
});
