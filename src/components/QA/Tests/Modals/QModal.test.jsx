import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QModal from '../../Modals/QModal';
import '@testing-library/jest-dom';

test('renders QModal component', async () => {
  const prodInfo = { name: 'Product 1' };
  const setOpenQModal = jest.fn();
  const axPost = jest.fn();
  render(
    <QModal prodInfo={prodInfo} setOpenQModal={setOpenQModal} axPost={axPost} />,
  );

  // Asserts that the component main title is rendered
  expect(await screen.getByTestId('qmod-title')).toBeInTheDocument();

  // Asserts that the form is rendered
  expect(await screen.getByTestId('qmod-form')).toBeInTheDocument();

  // Asserts that the "Cancel" button is rendered
  expect(await screen.getByTestId('qmod-cancel-btn')).toBeInTheDocument();

  // Asserts that the "Submit" button is rendered
  expect(await screen.getByTestId('qmod-submit-btn')).toBeInTheDocument();

  // Asserts that the name input is required
  const nameInput = await screen.getByTestId('qmod-name').querySelector('input');
  expect(nameInput).toBeRequired();

  // Asserts that the email input is required
  const emailInput = await screen.getByTestId('qmod-email').querySelector('input');
  expect(emailInput).toBeRequired();

  // Asserts that the question input is required
  const questionInput = await screen.getByTestId('qmod-question').querySelector('input');
  expect(questionInput).toBeRequired();

  // Simulates form submission with empty fields
  fireEvent.submit(screen.getByTestId('qmod-form'));
  expect(axPost).not.toHaveBeenCalled();
  expect(setOpenQModal).not.toHaveBeenCalled();

  // Simulates form submission with valid fields
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.change(questionInput, { target: { value: 'This is my question' } });
  fireEvent.submit(screen.getByTestId('qmod-form'));
  expect(axPost).toHaveBeenCalledWith({
    body: 'This is my question',
    name: 'John Doe',
    email: 'john.doe@example.com',
  });
  expect(setOpenQModal).toHaveBeenCalledWith(false);
});
