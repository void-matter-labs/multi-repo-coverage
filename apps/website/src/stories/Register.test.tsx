import { fireEvent, screen } from '@testing-library/react';

import { composeStory } from '@storybook/react';

import Meta, { UserForm } from './Register.stories';


const ValidForm = composeStory(UserForm, Meta);

test('Checks if the form is valid', async () => {
  // Renders the composed story
  await ValidForm.run();

  const buttonElement = screen.getByRole('button');

  fireEvent.click(buttonElement);

  const isFormValid = screen.getByText('Everything is perfect.');
  expect(isFormValid).toBeInTheDocument();
});