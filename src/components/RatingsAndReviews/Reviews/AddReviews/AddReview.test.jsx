/* eslint-disable no-undef */
import React from 'react';
import 'react-dom';
import { render, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import AddReview from './AddReview';
import ProductContext from '../../../../contexts/ProductContext';

const reviewsMeta = {
  product_id: '40346',
  AddReview: {
    1: '23',
    2: '52',
    3: '46',
    4: '36',
    5: '87',
  },
  recommended: {
    false: '67',
    true: '177',
  },
  characteristics: {
    Fit: {
      id: 135224,
      value: '2.6666666666666667',
    },
    Length: {
      id: 135225,
      value: '3.1315789473684211',
    },
    Comfort: {
      id: 135226,
      value: '3.0314136125654450',
    },
    Quality: {
      id: 135227,
      value: '3.4032258064516129',
    },
  },
};

const product = 40346;

test('loads and displays AddReview', async () => {
  const { getByText, queryByText } = render(
    <ProductContext.Provider value={product}>
      <AddReview reviewsMeta={reviewsMeta} />
    </ProductContext.Provider>,
  );

  expect(queryByText('Write Your Review')).not.toBeInTheDocument();

  fireEvent.click(getByText('ADD A REVIEW +'));

  expect(queryByText('Write Your Review')).toBeInTheDocument();

  fireEvent.click(getByText('X'));

  expect(queryByText('Write Your Review')).not.toBeInTheDocument();
});
