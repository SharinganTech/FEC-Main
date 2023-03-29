import React from 'react';
import axios from 'axios';
import 'react-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { test, expect, jest } from '@jest/globals';
import '@testing-library/jest-dom';
import HelpfulButtons from '../Reviews/HelpfulButtons';

// describe('Helpful Buttons component', () => {
//   beforeEach(() => {
//     axios.put.mockReset();
//   });

jest.mock('axios');

test('should load and displays ratings and reviews', async () => {
  const reviewID = 40346;
  axios.put.mockResolvedValue({ status: 204 });

  const { getByText } = render(<HelpfulButtons
    reviewID={reviewID}
    helpfulness={3}
    makeGetRequest={() => {}}
  />);

  fireEvent.click(getByText('Yes'));
  fireEvent.click(getByText('Report'));

  await waitFor(() => expect(axios.put).toHaveBeenCalledTimes(2));
});
// });
