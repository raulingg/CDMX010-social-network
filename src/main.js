// Este es el punto de entrada de tu aplicacion
import { onNavigate, routes } from './utils/router.js';
import { auth } from './lib/firebase.js';

const rootDiv = document.getElementById('root');
const homeElement = document.getElementById('home');
const commentsElement = document.getElementById('comments');
const loginElement = document.getElementById('login');

homeElement.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home');
});

commentsElement.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/comments');
});

loginElement.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
});

window.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(function(user) {
        if (user) {
          console.log('user', user)
        } else {
          console.log('user is not sign in')
        }
      });
});

const currentRoute = routes[window.location.pathname];
rootDiv.innerHTML = currentRoute(); //nos da la ruta en la cual estamos ubicados

