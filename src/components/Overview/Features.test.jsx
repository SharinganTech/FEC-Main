import React from 'react';
import { expect, test } from '@jest/globals';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Features from './Features';

const features = [
  { feature: 'test', value: 'test' },
  { feature: 'test feature', value: 'test value' },
];

test('loads and displays AList', async () => {
  render(
    <Features features={features} />,
  );

  const body = await screen.getByText('test feature');

  expect(body).toHaveTextContent('test feature');
});
