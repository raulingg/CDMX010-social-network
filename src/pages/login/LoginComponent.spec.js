/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import { screen, waitFor } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Login from './LoginComponent';

describe('LoginComponent', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
  });

  it('should render', () => {
    const target = document.getElementById('root');
    Login({ firebaseClient: {} }).render(target);

    expect(target.innerHTML).toMatchSnapshot();
  });

  it('should login the user when the user submits the login form', () => {
    const target = document.getElementById('root');
    const signIn = jest.fn().mockImplementation(() => Promise.resolve('ok'));
    const email = 'test@example.com';
    const password = '123456789';
    Login({ signIn }).render(target);

    userEvent.type(screen.getByLabelText('Email'), email);
    userEvent.type(screen.getByLabelText('Password'), password);
    userEvent.click(screen.getByDisplayValue('Sign In'));
    expect(signIn).toHaveBeenCalledWith(email, password);
  });

  it('should show an error message when a user provides invalid credentials', async () => {
    const target = document.getElementById('root');
    const message = 'Invalid credentials!';
    const signIn = jest.fn().mockImplementation(
      (email, password) => Promise.reject({ message }),
    );
    const email = 'test@example.com';
    const password = 'invalidpassword';
    Login({ signIn }).render(target);

    userEvent.type(screen.getByLabelText('Email'), email);
    userEvent.type(screen.getByLabelText('Password'), password);
    userEvent.click(screen.getByDisplayValue('Sign In'));
    expect(signIn).toHaveBeenCalledWith(email, password);

    await waitFor(() => {
      expect(screen.getByTestId('errorMessage').innerHTML).toBe(message);
    });
  });
});
