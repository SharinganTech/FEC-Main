import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AListEntries from './AListEntries';

const eachA = {
  answerer_name: 'haha',
  body: 'hehe',
  date: '2023-02-08T00:00:00.000Z',
  helpfulness: 9,
  id: 5990599,
};

test('loads and displays AList', async () => {
  render(<AListEntries eachA={eachA} />);
  const body = await screen.getByTestId('answers-body');
  expect(body).toHaveTextContent('hehe');
});

test('should increment helpful', async () => {
  render(<AListEntries eachA={eachA} />);
  // expect(body).toHaveTextContent('hehe');
  const span = await screen.getByTestId('helpful-span');
  const btn = await screen.getByTestId('increment-btn');
  userEvent.click(btn);

  await waitFor(() => {
    expect(span).toHaveTextContent(`Yes (${eachA.helpfulness + 1})`);
  });
});
