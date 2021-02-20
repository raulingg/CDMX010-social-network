// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { home } from './home.js';
import { contact } from './contact.js';
import { about } from './about.js';

const routes = { // Array donde estarán las rutas que necesitamos, referencia directa de los botones
  '/': home, // Valor que se consulta en cada elemento
  '/contact': contact,
  '/about': about,

};

const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname]; //

const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  )
  rootDiv.innerHTML = routes[pathname]
};

window.onNavigate = onNavigate

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
