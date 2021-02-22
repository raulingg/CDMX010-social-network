/* eslint-disable jest/no-identical-title */
/* eslint-disable max-len */
/* eslint-disable jest/no-focused-tests */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import {
  getByAltText, getByText, queryByTestId, queryByText, screen, waitFor,
} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import Home from './HomeComponent.js';

const observe = jest.fn();
const disconnect = jest.fn();

// you can also pass the mock implementation
// to jest.fn as an argument
window.IntersectionObserver = jest.fn(() => ({
  observe,
  disconnect,
}));

const posts = [
  {
    message: 'Post 1',
    user: 'test@example.com',
    createdAt: '2021-02-21T20:50:22.438Z',
  },
  {
    message: 'Post 2',
    user: 'test@example.com',
    createdAt: '2021-02-21T20:50:22.438Z',
  },
  {
    message: 'Post 3',
    user: 'test@example.com',
    createdAt: '2021-02-21T20:50:22.438Z',
  }];

describe('HomeComponent', () => {
  const email = 'test@example.com';
  const message = 'new post';
  const user = { email, name: 'test' };

  const create = jest.fn().mockImplementation(
    () => Promise.resolve('newuid'),
  );

  const signOut = jest.fn().mockImplementation(
    () => Promise.resolve(),
  );

  beforeEach(() => {
    document.body.innerHTML = '<div id="root"></div>';
    create.mockClear();
    signOut.mockClear();
  });

  const createPost = (messageArg = message) => {
    userEvent.type(screen.getByTestId('postBuilderInput'), messageArg);
    userEvent.click(screen.getByTestId('postBuilderButton'));
  };

  it('should render', () => {
    const target = document.getElementById('root');
    Home({ firebaseClient: {}, user }).render(target);

    expect(target.innerHTML).toMatchSnapshot();
  });

  it('should show a list of posts', () => {
    const target = document.getElementById('root');
    const home = Home({ firebaseClient: {}, user });
    home.render(target);
    home.setData({ posts });
    home.showPosts();

    expect(target.innerHTML).toMatchSnapshot();
  });

  it('should sign out', async () => {
    const target = document.getElementById('root');
    Home({ firebaseClient: { auth: { signOut } }, user }).render(target);

    userEvent.click(screen.getByText('Logout'));
    expect(signOut).toHaveBeenCalled();
  });

  describe('createPost', () => {
    it('should show a validation error message when a user submits an empty post', () => {
      const target = document.getElementById('root');
      Home({ firebaseClient: { post: { create } }, user }).render(target);
      createPost('');
      expect(screen.getByTestId('feedbackMessage').innerHTML).toBe('Mensaje es requerido!');
    });

    it('should create a new post', async () => {
      const target = document.getElementById('root');
      Home({ firebaseClient: { post: { create } }, user }).render(target);
      createPost();

      expect(create).toHaveBeenCalledWith({ message, user: email });

      await waitFor(() => {
        expect(screen.getByTestId('feedbackMessage').innerHTML).toBe('Message sent successfully!');
        expect(document.querySelector('[data-id=newuid]')).toBeInTheDocument();
      });
    });
  });

  describe('editablePost', () => {
    it('should show an editable post focused and hide post when user clicks over a post', async () => {
      const target = document.getElementById('root');
      Home({ firebaseClient: { post: { create } }, user }).render(target);
      createPost();

      await waitFor(() => {
        userEvent.click(screen.getByText(message));
        const editableMessageElement = screen.getByText(message);
        expect(queryByText(editableMessageElement.parentElement, email)).not.toBeInTheDocument();
        expect(editableMessageElement).toHaveFocus();
        expect(editableMessageElement.parentElement).toMatchSnapshot();
      });
    });

    it('should hide editable post and reshow the post when a user cancels the edition', async () => {
      const target = document.getElementById('root');
      Home({ firebaseClient: { post: { create } }, user }).render(target);
      createPost();

      await waitFor(() => {
        userEvent.click(screen.getByText(message));
        const editableElement = screen.getByText(message);
        userEvent.click(screen.getByText('Cancel'));
        const { parentElement } = screen.getByText(message);
        expect(queryByText(parentElement, email)).toBeVisible();
        expect(parentElement).not.toContainElement(editableElement);
      });
    });

    it('should hide editable post and reshow the post when user types Escape', async () => {
      const target = document.getElementById('root');
      Home({ firebaseClient: { post: { create } }, user }).render(target);
      createPost();

      await waitFor(() => {
        userEvent.click(screen.getByText(message));
        const editableElement = screen.getByText(message);
        userEvent.type(screen.getByText(message), '{esc}');
        const { parentElement } = screen.getByText(message);
        expect(queryByText(parentElement, email)).toBeVisible();
        expect(parentElement).not.toContainElement(editableElement);
      });
    });
  });
});
