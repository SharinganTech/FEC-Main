import React from 'react';
import 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AList from '../../Answers/AList';

const eachQ = {
  answers: {
    5991199: {
      answerer_name: 's',
      body: 'w',
      date: '2023-03-25T00:00:00.000Z',
      helpfulness: 0,
      id: 5991199,
      phostos: [''],
    },
    5991273: {
      answerer_name: 'Seller',
      body: 'the answer',
      date: '2023-03-27T00:00:00.000Z',
      helpfulness: 0,
      id: 5991273,
      photos: [],
    },
    5991274: {
      answerer_name: 'checkseller',
      body: 'third test',
      date: '2023-03-27T00:00:00.000Z',
      helpfulness: 0,
      id: 5991274,
      photos: [],
    },
  },
  asker_name: 't1',
  question_body: 'test',
  question_date: '2023-03-25T00:00:00',
  question_id: 645508,
  reported: false,
};

test('loads and displays AList', async () => {
  render(<AList eachQ={eachQ} />);
  const body = await screen.getByTestId('answers-list');

  expect(body).toHaveTextContent('w');
});

test('should increment helpful', async () => {
  render(<AList eachQ={eachQ} />);
  // expect(body).toHaveTextContent('hehe');
  const list = await screen.getByTestId('answers-list');
  const btn = await screen.getByTestId('more-answers-btn');
  userEvent.click(btn);

  await waitFor(() => {
    expect(list).toHaveTextContent('third test');
  });
});
