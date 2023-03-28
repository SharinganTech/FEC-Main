import React from 'react';
import 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import CardList from './CardList';
import CardListEntry from './CardListEntry';
import ProductContext from '../../contexts/ProductContext';

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

const pumpedUpKicks = {
  id: 40349,
  campus: 'hr-rfp',
  name: 'Pumped Up Kicks',
  slogan: 'Faster than a just about anything',
  description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
  category: 'Kicks',
  default_price: '89.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

const prodId = {
  id: 40349,
  campus: 'hr-rfp',
  name: 'Pumped Up Kicks',
  slogan: 'Faster than a just about anything',
  description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
  category: 'Kicks',
  default_price: '89.00',
  created_at: '2021-08-13T14:38:44.509Z',
  updated_at: '2021-08-13T14:38:44.509Z',
  features: [
    {
      feature: 'Sole',
      value: 'Rubber',
    },
    {
      feature: 'Material',
      value: 'FullControlSkin',
    },
    {
      feature: 'Mid-Sole',
      value: 'ControlSupport Arch Bridge',
    },
    {
      feature: 'Stitching',
      value: 'Double Stitch',
    },
  ],
};

// test('the Loading text should appear when the feature first renders', () => {
//   render(<CardList prodId={testObj.id} />);
//   const element = screen.getByText('Loading...');
//   expect(element).toBeInTheDocument();
// });

test('loads and displays a card', async () => {
  render(
    <ProductContext.Provider value={prodId}>
      <CardListEntry
        relatedItem={pumpedUpKicks}
      />
    </ProductContext.Provider>,
  );
  const name = await screen.getByTestId('card-name');
  const price = await screen.getByTestId('card-price');
  const category = await screen.getByTestId('card-category');

  expect(name).toHaveTextContent('Pumped Up Kicks');
  expect(price).toHaveTextContent('89.00');
  expect(category).toHaveTextContent('Kicks');
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