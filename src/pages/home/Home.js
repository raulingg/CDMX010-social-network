import postBuilder from './components/PostBuilder.js';
import navBar from './components/NavBar.js';

export default ({ getUser, signOut, createPost }) => {
  const render = () => `
      <h1>Home</h1>
      ${navBar.render()}
      ${postBuilder.render()}
    `;

  const attachListeners = () => {
    const submitBtn = document.getElementById('submitBtn');
    const signOutElement = document.getElementById('signOut');

    submitBtn.addEventListener('click', () => {
      const message = document.getElementById('message').value;
      const user = getUser();
      createPost({ message, user: user.email }).then(() => {
        document.getElementById('feedbackMessage').hidden = false;
        setTimeout(() => {
          document.getElementById('feedbackMessage').hidden = true;
        }, 3000);
      });
    });

    signOutElement?.addEventListener('click', (event) => {
      event.preventDefault();
      signOut();
    });
  };

  return { render, attachListeners };
};
