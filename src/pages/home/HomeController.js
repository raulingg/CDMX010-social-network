import Home from './HomeComponent.js';

export default async (target, {
  createPost,
  signOut,
  getUser,
  getPosts,
}) => {
  const view = Home({ getUser, signOut, createPost });
  view.render(target);
  const posts = await getPosts();

  view.showPosts(posts);
};
