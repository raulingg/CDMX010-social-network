/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import PostBuilder from './components/PostBuilder.js';
import Post from './components/Post.js';
import NavBar from './components/NavBar.js';

export default ({
  getUser, createPost, signOut, getPosts,
}) => {
  const state = { posts: [], lastVisible: null, hasMore: true };
  let observer = null;

  const html = () => `
    <h1>Home</h1>
    ${NavBar()}
    ${PostBuilder()}
    <div id="wall">
      <p>Fetching posts...</p>
    </div>
    <div id="observer"></div>
  `;

  const setData = (newSate) => Object.assign(state, newSate);

  const showPosts = () => {
    const wallElement = document.getElementById('wall');
    wallElement.innerHTML = state.posts.map(Post).join('');

    if (observer) observer.disconnect();
    const observedElement = document.getElementById('observer');

    // eslint-disable-next-line no-use-before-define
    createObserver(observedElement);
  };

  const createObserver = (element) => {
    observer = new IntersectionObserver(async ([entry]) => {
      if (entry && entry.isIntersecting && state.hasMore) {
        const result = await getPosts({ lastVisible: state.lastVisible });

        if (result.lastVisible) {
          setData({
            posts: state.posts.concat(result.posts),
            lastVisible: result.lastVisible,
            hasMore: result.hasMore,
          });
          showPosts();
        }
      }
    });
    observer.observe(element);
  };

  const onCreatePostHandler = async () => {
    const message = document.getElementById('message').value;
    const user = getUser();
    const post = { message, user: user.email, createdAt: new Date() };
    await createPost(post);
    document.getElementById('feedbackMessage').hidden = false;
    setData({ posts: [post, ...state.posts] });
    showPosts();
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
    setData,
    showPosts,
  };
};
