import { welcome } from './views/welcome.js';
import { signUp } from './views/signup.js';
import { logIn } from './views/login.js';
import { firstView } from './views/firstView.js';
import { retroView } from './views/retroView.js';

export const routes = {
  '/': welcome,
  '/signUp': signUp,
  '/logIn': logIn,
  '/mxchilazo': firstView,
  '/bellasArtes': retroView,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  return routes[pathname];
};
