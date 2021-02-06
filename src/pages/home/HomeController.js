import Home from './HomeComponent.js';

export default async (target, {
  createPost,
  signOut,
  getUser,
  getPosts,
}) => {
  const view = Home({
    getUser, signOut, createPost, getPosts,
  });
  view.render(target);
  const result = await getPosts();
  view.setData(result);
  view.showPosts();
};
