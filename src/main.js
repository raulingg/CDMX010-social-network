// Este es el punto de entrada de tu aplicacion
import { onNavigate, routes } from './utils/router.js';
import { auth, getPosts } from './lib/firebase.js';

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
            onNavigate('/home')
        } else {
            onNavigate('/')
        }
    });
});

window.addEventListener('load', () => {
    getPosts().then(result => console.log(result));
});

