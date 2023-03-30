import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AListEntry from '../../Answers/AListEntry';

const eachA = {
  answerer_name: 'Seller',
  body: 'What\'s good',
  date: '2023-03-24T00:00:00.000Z',
  helpfulness: 0,
  id: 5991144,
  photos: [],
};

test('loads and displays AList', async () => {
  render(<AListEntry eachA={eachA} />);
  const title = await screen.getByTestId('answers-title');
  const body = await screen.getByTestId('answers-body');
  const answerer = await screen.getByTestId('answerers-name');
  const date = await screen.getByTestId('answers-date');

  expect(title).toHaveTextContent('A:');
  expect(body).toHaveTextContent('What\'s good');
  expect(answerer).toHaveTextContent('Seller');
  expect(date).toHaveTextContent('March 24, 2023');
});

test('should increment helpful', async () => {
  render(<AListEntry eachA={eachA} />);
  // expect(body).toHaveTextContent('hehe');
  const span = await screen.getByTestId('helpful-span');
  const btn = await screen.getByTestId('increment-btn');
  userEvent.click(btn);

  await waitFor(() => {
    expect(span).toHaveTextContent(`Yes (${eachA.helpfulness + 1})`);
  });
});
