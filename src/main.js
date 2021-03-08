// Este es el punto de entrada de tu aplicacion
import {onNavigate} from "./router.js";
// import {forRouter, onNavigate, routes } from "./router.js";
// const rootDiv = document.getElementById('root'); //


//Renderiza por default
let currentPathname = window.location.pathname;
onNavigate(currentPathname);

//Enlaces para acceder a las secciones
// const homeLink = document.getElementById('home');
// const singUpLink = document.getElementById('singUp');
// const loginLink = document.getElementById('login');
// const postLink = document.getElementById('post');
// const logOutLink = document.getElementById('logout');


//Funciones que renderizan cada sección
// forRouter(homeLink, '/home');
// forRouter(singUpLink, '/singup');
// forRouter(loginLink, '/login');
// forRouter(postLink, '/post');
// forRouter(logOutLink, '/logout');

