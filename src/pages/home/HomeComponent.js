/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import PostBuilder from './components/PostBuilder.js';
import Post from './components/Post.js';
import NavBar from './components/NavBar.js';

export default ({ getUser, createPost, signOut }) => ({
  html() {
    return `
      <h1>Home</h1>
      ${NavBar()}
      ${PostBuilder()}
      <div id="wall">
        <p>Fetching posts...</p>
      </div>
    `;
  },
  async onCreatePostHandler() {
    const message = document.getElementById('message').value;
    const user = getUser();
    await createPost({ message, user: user.email, createdAt: new Date() });
    document.getElementById('feedbackMessage').hidden = false;
    setTimeout(() => {
      document.getElementById('feedbackMessage').hidden = true;
    }, 3000);
  },
  onSignOutHandler(e) {
    e.preventDefault();
    signOut();
  },
  showPosts(posts) {
    const wallElement = document.getElementById('wall');
    wallElement.innerHTML = posts.map(Post).join('');
  },
  render(target) {
    target.innerHTML = this.html();

    document.getElementById('submitBtn').addEventListener('click', this.onCreatePostHandler);
    document.getElementById('signOut').addEventListener('click', this.onSignOutHandler);
  },
});
