/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import PostBuilder from './components/PostBuilder.js';
import Post from './components/Post.js';
import NavBar from './components/NavBar.js';

export default ({
  getUser, createPost, signOut, getPosts,
}) => {
  const html = () => `
    <h1>Home</h1>
    ${NavBar()}
    ${PostBuilder()}
    <div id="wall">
      <p>Fetching posts...</p>
    </div>
  `;

  const showPosts = (posts) => {
    const wallElement = document.getElementById('wall');
    wallElement.innerHTML = posts.map(Post).join('');
  };

  const onCreatePostHandler = async () => {
    const message = document.getElementById('message').value;
    const user = getUser();
    await createPost({ message, user: user.email, createdAt: new Date() });
    document.getElementById('feedbackMessage').hidden = false;
    const posts = await getPosts();
    showPosts(posts);
    setTimeout(() => {
      document.getElementById('feedbackMessage').hidden = true;
    }, 3000);
  };

  const onSignOutHandler = (e) => {
    e.preventDefault();
    signOut();
  };

  const render = (target) => {
    target.innerHTML = html();

    document.getElementById('submitBtn').addEventListener('click', onCreatePostHandler);
    document.getElementById('signOut').addEventListener('click', onSignOutHandler);
  };

  return {
    render,
    showPosts,
  };
};
