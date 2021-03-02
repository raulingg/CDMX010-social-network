import { home } from './pages/home.js';
import { form } from './pages/form.js';
import { post } from './pages/post.js';
import { singlepost } from './pages/singlepost.js';

export const routes = {
  '/': home,
  '/post': post,
  '/form': form,
  '/singlepost': singlepost,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};