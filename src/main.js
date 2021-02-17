// Este es el punto de entrada de tu aplicacion
import {forRouter, onNavigate } from "./router.js";

//Renderiza por default
// let currentPathname = window.location.pathname;
// onNavigate(currentPathname);

//Enlaces para acceder a las secciones
const loginLink = document.getElementById('login');
const homeLink = document.getElementById('home');
const postLink = document.getElementById('post');


//Funciones que renderizan cada sección
forRouter(homeLink, '/home');
forRouter(loginLink, '/Login');
forRouter(postLink, '/post');
