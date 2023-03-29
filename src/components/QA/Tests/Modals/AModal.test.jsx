/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AModal from '../../Modals/AModal';
import '@testing-library/jest-dom';

test('renders AModal component', async () => {
  const prodInfo = { name: 'Product 1' };
  const question = 'Question 1';
  const setOpenA = jest.fn();
  const axPostAnswer = jest.fn();
  render(
    <AModal
      prodInfo={prodInfo}
      question={question}
      setOpenA={setOpenA}
      axPostAnswer={axPostAnswer}
    />,
  );

  // Asserts that the component main title is rendered
  expect(await screen.getByTestId('amod-main-title')).toBeInTheDocument();

  // Asserts that the form is rendered
  expect(await screen.getByTestId('amod-form')).toBeInTheDocument();

  // Asserts that the product title is rendered
  expect(await screen.getByTestId('amod-p-title')).toHaveTextContent('Product: Product 1');

  // Asserts that the question title is rendered
  expect(await screen.getByTestId('amod-q-title')).toHaveTextContent('Question: Question 1');

  // Asserts that the "Cancel" button is rendered
  expect(await screen.getByTestId('amod-cancel-btn')).toBeInTheDocument();

  // Asserts that the "Submit" button is rendered
  expect(await screen.getByTestId('amod-submit-btn')).toBeInTheDocument();

  // Asserts that the name input is required
  const nameInput = await screen.getByTestId('amod-name').querySelector('input');
  expect(nameInput).toBeRequired();

  // Asserts that the email input is required
  const emailInput = await screen.getByTestId('amod-email').querySelector('input');
  expect(emailInput).toBeRequired();

  // Asserts that the answer input is required
  const answerInput = await screen.getByTestId('amod-answer').querySelector('input');
  expect(answerInput).toBeRequired();

  // Photo input
  // const photosInput = await screen.getByTestId('amod-photos').querySelector('input');

  // Simulates form submission with empty fields
  fireEvent.submit(screen.getByTestId('amod-form'));
  expect(axPostAnswer).not.toHaveBeenCalled();
  expect(setOpenA).not.toHaveBeenCalled();

  // Simulates form submission with valid fields
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(answerInput, { target: { value: 'This is my answer' } });
  // fireEvent.change(photosInput, {
  //   target: {
  //     value: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
  //       'https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'],
  //   },
  // });
  fireEvent.submit(screen.getByTestId('amod-form'));
  expect(axPostAnswer).toHaveBeenCalledWith({
    body: 'This is my answer',
    name: 'John Doe',
    email: 'john.doe@example.com',
    photos: [''],
  });
  expect(setOpenA).toHaveBeenCalledWith(false);
});
