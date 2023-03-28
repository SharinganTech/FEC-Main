import React, { useState } from 'react';
import 'react-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { expect, jest, test } from '@jest/globals';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddToCart from './AddToCart';

const inventory = [
  { quantity: 1, size: 'XS' },
  { quantity: 15, size: 'S' },
  { quantity: 8, size: 'M' },
  { quantity: 7, size: 'L' },
  { quantity: 10, size: 'XL' },
];

test('Renders a button with Favorite text', async () => {
  await act(async () => {
    render(
      <AddToCart inventory={inventory} />,
    );
  });

  const body = await screen.getByTestId('favorite');

  expect(body).toHaveTextContent('FAVORITE');
});

test('adds item to cart', async () => {
  await act(async () => { render(<AddToCart inventory={inventory} />); });

  await act(
    async () => {
      fireEvent.click(
        screen.getByRole('button', { name: /ADD TO CART/i }),
      );
    },
  );
  const myCart = await screen.getByTestId('addToCart');

  await expect(myCart.innerHTML).toEqual('ADD TO CART:1');
});

test('Selecting a Size', async () => {
  await act(async () => { render(<AddToCart inventory={inventory} />); });

  await act(
    async () => {
      fireEvent.change(
        screen.getByTestId('sizeDropdown', { target: { value: 'XL' } }),
      );
    },
  );
  const mySize = await screen.getByTestId('XL');

  await expect(mySize.innerHTML).toEqual('XL');
});
