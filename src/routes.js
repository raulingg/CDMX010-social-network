import { home } from './home.js';
import { contact } from './contact.js';
import { about } from './about.js';

const rootDiv = document.getElementById('root');

export const routes = { //Array donde estarán las rutas que necesitamos, referencia directa de los botones
    '/': home, //Valor que se consulta en cada elemento
    '/contact': contact,
    '/about': about,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname,
    )
    const component = routes[pathname]
    component(rootDiv)
  };
  