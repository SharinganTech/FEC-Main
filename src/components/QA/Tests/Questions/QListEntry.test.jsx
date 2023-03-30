import React from 'react';
import axios from 'axios';
import { render, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QListEntry from '../../Questions/QListEntry';
import exampleData from '../exampleData';

// import React from 'react';
// import { render, fireEvent, act } from '@testing-library/react';
// import axios from 'axios';
// import QListEntry from './QListEntry';

jest.mock('axios');

describe('QListEntry', () => {
  const prodInfo = {
    id: 123,
    name: 'Test Product'
  };

  const eachQ = exampleData.results[0];

  const axGet = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the question text', () => {
    const { getByText } = render(<QListEntry prodInfo={prodInfo} eachQ={eachQ} axGet={axGet} />);
    const questionText = getByText('Q: Nihil cumque suscipit voluptatem dolorum unde.');

    expect(questionText).toBeInTheDocument();
  });

  it('handles clicking the "Helpful?" button', async () => {
    const { getByTestId, getByText } = render(
      <QListEntry prodInfo={prodInfo} eachQ={eachQ} axGet={axGet} />,
    );
    const helpfulButton = getByTestId('qhelp-btn');
    let reportBtn = getByTestId('qreport-btn');

    fireEvent.click(helpfulButton);
    fireEvent.click(reportBtn);

    const yesCount = await getByTestId('qyes-count');
    reportBtn = await getByText('Reported');

    expect(yesCount).toHaveTextContent('Yes (32)');
    expect(reportBtn).toBeInTheDocument();
  });
});

// axios.put.mockResolvedValueOnce({});

// await act(async () => {
//   await axios.put();
// });
// expect(axios.put).toHaveBeenCalledWith('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/329092/helpful', { question_helpfulness: 32 }, { headers: { Authorization: process.env.AUTH_TOKEN } });


// it('handles clicking the "Report" button', async () => {
//   axios.put.mockResolvedValueOnce();

//   const { getByText } = render(<QListEntry prodInfo={prodInfo} eachQ={eachQ} axGet={axGet} />);
//   const reportButton = getByText('Report');

//   fireEvent.click(reportButton);

//   await act(async () => {
//     await axios.put();
//   });

//   expect(axios.put).toHaveBeenCalledWith('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/1/report', { reported: true }, { headers: { Authorization: process.env.AUTH_TOKEN } });
// });

// it('opens the add answer modal when the "Add Answer" button is clicked', () => {
//   const { getByText, queryByText } = render(<QListEntry prodInfo={prodInfo} eachQ={eachQ} axGet={axGet} />);
//   const addButton = getByText('Add Answer');

//   expect(queryByText('Submit your Answer')).toBeNull();

//   fireEvent.click(addButton);

//   expect(getByText('Submit your Answer')).toBeInTheDocument();
// });
