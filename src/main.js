// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { routes } from './routes.js'

const rootDiv = document.getElementById('root');
const home = routes[window.location.pathname]
home(rootDiv); //

window.onpopstate = () => {
  const component = routes[window.location.pathname];
  component(rootDiv)
};
