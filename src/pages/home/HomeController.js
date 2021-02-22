import Home from './HomeComponent.js';

export default async (target, { firebaseClient }) => {
  const view = Home({ firebaseClient, user: firebaseClient.auth.getUser() });
  view.render(target);
  const result = await firebaseClient.post.list();
  view.setData(result);
  view.showPosts();
};
