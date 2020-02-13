import React from 'react';
import { render, fireEvent, getByTestId} from '@testing-library/react';
import ContactForm from './ContactForm';

test(" form is rendering", () => {
  const {queryByLabelText} = render(<ContactForm/>);
  queryByLabelText(/first name/i);
  queryByLabelText(/last name/i);
  queryByLabelText(/email/i);
  queryByLabelText(/message/i);
});

test("adds a new user", () => {
  const { getByLabelText, getByTestId} = render(<ContactForm/>);
  const firstNameInput = getByLabelText(/first Name/i);
  const lastNameInput = getByLabelText(/last Name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);

  fireEvent.change(firstNameInput, {target:{value:'test first name'}});
fireEvent.change(lastNameInput, {target:{value:'test last name'}});
fireEvent.change(emailInput, {target:{value:'test email'}});
fireEvent.change(messageInput, {target:{value:'test message'}});

expect(firstNameInput.value).toBe('test first name');
expect(lastNameInput.value).toBe('test last name');
expect(emailInput.value).toBe('test email');
expect(messageInput.value).toBe('test message');



  fireEvent.click(getByTestId(/submit/i));

  
})