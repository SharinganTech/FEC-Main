import React from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AListEntries from './AListEntries';

test('loads and displays AList', async () => {
  render(<AListEntries />);
  const body = await screen.getByTestId('answers-body');
  expect(body).toHaveTextContent('hehe');
});
