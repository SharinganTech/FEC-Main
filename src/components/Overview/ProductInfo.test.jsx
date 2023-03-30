import React from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import '@testing-library/jest-dom';
import ProductInfo from './ProductInfo';

const category = 'Category';

const currentStyle = {};

const name = 'Name';

test('loads and displays AList', async () => {
  render(
    <ProductInfo currentStyle={currentStyle} category={category} name={name} />,
  );

  const body = await screen.getByText('Name');

  expect(body).toHaveTextContent('Name');
});
