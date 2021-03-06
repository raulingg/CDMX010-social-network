import { welcome } from './components/welcome.js';
import { signUpView } from './components/signup.js';
import { logIn } from './components/login.js';
import { placesView } from './components/places.js';
import { retroView } from './components/retro.js';

export const routes = {
  '/': welcome,
  '/signUp': signUpView,
  '/logIn': logIn,
  '/mxchilazo': placesView,
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
