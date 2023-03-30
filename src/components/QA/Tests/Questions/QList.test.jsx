import React from 'react';
import axios from 'axios';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QList from '../../Questions/QList';
import exampleData from '../exampleData';
// import 'react-dom';
// import 'jest-dom';
// import 'jest-environment-jsdom';
// import '@jest/globals';

jest.mock('axios');

describe('QList', () => {
  const prodInfo = {
    id: 12345,
    name: 'Test Product',
  };

  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: { results: exampleData.results },
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('renders the Questions & Answers section', async () => {
    render(<QList prodInfo={prodInfo} />);
    await waitFor(() => expect(screen.getByText('Questions & Answers')).toBeInTheDocument());
  });

  test('displays the list of questions', async () => {
    render(<QList prodInfo={prodInfo} />);
    await waitFor(() => expect(axios.get).toHaveBeenCalledWith(
      'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=12345&count=100',
      {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      },
    ));
    expect(screen.getAllByTestId('qlist-entry')).toHaveLength(2);
    expect(screen.getByText('Q: Nihil cumque suscipit voluptatem dolorum unde.')).toBeInTheDocument();
    expect(screen.getByText('Q: Eaque quasi rerum et quia eum dolores nulla corrupti.')).toBeInTheDocument();
  });

  // test('displays more questions when the "More Answered Questions" button is clicked', async () => {
  //   render(<QList prodInfo={prodInfo} />);
  //   await waitFor(() => expect(screen.getByText('Questions & Answers')).toBeInTheDocument());
  //   expect(screen.getAllByTestId('qlist-entry')).toHaveLength(2);
  //   fireEvent.click(screen.getByTestId('more-questions-btn'));
  //   expect(screen.getAllByTestId('qlist-entry')).toHaveLength(3);
  //   expect(screen.getByText('Test question 3')).toBeInTheDocument();
  // });

  // test('opens the Add A Question modal when the "Add A Question" button is clicked', async () => {
  //   render(<QList prodInfo={prodInfo} />);
  //   await waitFor(() => expect(screen.getByText('Questions & Answers')).toBeInTheDocument());
  //   fireEvent.click(screen.getByText('Add A Question'));
  //   expect(screen.getByText('Ask Your Question')).toBeInTheDocument();
  // });
});
