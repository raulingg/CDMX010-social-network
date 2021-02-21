// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();

import { routes, onNavigate } from './routes.js';

let rootDiv = null;

window.addEventListener('DOMContentLoaded', () => {
  rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];
  document.querySelector('#login').addEventListener('click', () => {
    const navigate = onNavigate('/signUp');
    rootDiv.innerHTML = navigate;
  }); // eventodeboton
});

//document.querySelector('#gmailIcon').addEventListener('click', authGoogle);

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
