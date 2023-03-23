import React from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardList from './CardList';

const testObj = {
  id: 40344,
  campus: 'hr-rfp',
  name: 'Camo Onesie',
  slogan: 'Blend in to your crowd',
  description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
  category: 'Jackets',
  default_price: '140.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
};

test('the Loading text should appear when the feature first renders', () => {
  render(<CardList prodId={testObj.id} />);
  const element = screen.getByText('Loading...');
  expect(element).toBeInTheDocument();
});

// import React from 'react';
// import 'react-dom';
// import { render, screen } from '@testing-library/react';
// // import userEvent from '@testing-library/user-event';
// import '@testing-library/jest-dom';
// import AListEntries from './AListEntries';

// const eachA = {
//   answerer_name: 'haha',
//   body: 'hehe',
//   date: '2023-02-08T00:00:00.000Z',
//   helpfulness: 9,
//   id: 5990599,
// };

// test('loads and displays AList', async () => {
//   render(<AListEntries eachA={eachA} />);
//   const body = await screen.getByTestId('answers-body');
//   expect(body).toHaveTextContent('hehe');
// });

// test('should increment helpful', async () => {
//   render(<AListEntries eachA={eachA} />);
//   // expect(body).toHaveTextContent('hehe');
//   const span = await screen.getByTestId('helpful-span');
//   const btn = await screen.getByTestId('increment-btn');
//   userEvent.click(btn);

//   await waitFor(() => {
//     expect(span).toHaveTextContent(`Yes (${eachA.helpfulness + 1})`);
//   });
// });