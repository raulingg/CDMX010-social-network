/* eslint-disable func-names */
/* eslint-disable no-param-reassign */
import PostBuilder from './components/PostBuilder.js';
import Post from './components/Post.js';
import NavBar from './components/NavBar.js';
import EditablePost from './components/EditablePost.js';

export default ({ firebaseClient }) => {
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

  const findPostById = (id) => state.posts.find((post) => post.id === id);

  const onSignOutHandler = (e) => {
    e.preventDefault();
    firebaseClient.auth.signOut();
  };

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
        const result = await firebaseClient.post.list({ lastVisible: state.lastVisible });

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

  const onCreatePostHandler = async (e) => {
    e.preventDefault();
    const { value: message } = e.target.message;
    const feedbackElement = document.getElementById('feedbackMessage');

    // validate message
    if (message) {
      const user = firebaseClient.auth.getUser();
      const post = { message, user: user.email, createdAt: new Date() };
      const postId = await firebaseClient.post.create(post);
      feedbackElement.hidden = false;
      feedbackElement.style.color = 'green';
      setData({ posts: [{ id: postId, ...post }, ...state.posts] });
      showPosts();
      setTimeout(() => {
        feedbackElement.hidden = true;
      }, 3000);
    } else {
      e.target.style.borderColor = 'red';
      feedbackElement.innerHTML = 'Mensaje es requerido!';
      feedbackElement.hidden = false;
      feedbackElement.style.color = 'red';
    }
  };

  const onUpdatePostHandler = async (e) => {
    e.preventDefault();
    const { parentElement } = e.target;
    const message = parentElement.message.value;
    const updatedAt = new Date();
    const id = parentElement.dataset.id;

    await firebaseClient.post.update(id, { message, updatedAt });
    const posts = state.posts.map(
      (post) => (post.id === id ? { ...post, message, updatedAt } : post),
    );
    setData({ posts });
    showPosts();
  };

  const onRemovePostHandler = (e) => {
    const { parentElement } = e.target;
    const { id } = parentElement.dataset;
    firebaseClient.post.remove(id);
    const posts = state.posts.filter((post) => post.id !== id);
    setData({ posts });
    showPosts();
  };

  const onEditPostHandler = (e) => {
    e.target.hidden = true;
    const { parentElement } = e.target;
    const selectedPost = findPostById(parentElement.dataset.id);
    parentElement.innerHTML = EditablePost(selectedPost);
    parentElement.firstElementChild.firstElementChild.focus();
  };

  const onEnableUpdateButtonHandler = (e) => {
    const { parentElement, value: message } = e.target;
    const { message: currentMessage } = findPostById(parentElement.dataset.id);

    const buttonElement = parentElement.querySelector('button[data-behavior=onUpdatePost]');
    buttonElement.disabled = message === currentMessage;
  };

  const render = (target) => {
    target.innerHTML = html();

    document.getElementById('postBuilderForm').addEventListener('submit', onCreatePostHandler);
    document.getElementById('signOut').addEventListener('click', onSignOutHandler);
    document.addEventListener('click', (e) => {
      const { behavior } = e.target.dataset;
      if (behavior === 'onEditPost') {
        onEditPostHandler(e);
      }

      if (behavior === 'onCancel') {
        showPosts();
      }

      if (behavior === 'onRemovePost') {
        onRemovePostHandler(e);
      }

      if (behavior === 'onUpdatePost') {
        onUpdatePostHandler(e);
      }
    });

    document.addEventListener('keyup', (e) => {
      const { behavior } = e.target.dataset;

      if (behavior === 'onEnableUpdateButton') {
        if (e.key === 'Escape') {
          showPosts();
        } else {
          onEnableUpdateButtonHandler(e);
        }
      }
    });
  };

  return {
    render,
    setData,
    showPosts,
  };
};
