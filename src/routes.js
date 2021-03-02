import { home } from './home.js';
import { posting } from './posting.js';
import { post } from './post.js';
import { singlepost } from './single-post.js';

export const routes = {
  '/': home,
  '/posting': posting,
  '/post': post,
  '/singlepost': singlepost,
};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];
export const onNavigate = (pathname) => {
  window.history.replaceState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  rootDiv.innerHTML = routes[pathname];
};
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
