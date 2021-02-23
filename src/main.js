/* eslint-disable quotes */
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();

import { routes, onNavigate } from "./routes.js";

let rootDiv = null;
function btnLogin() {
  document.querySelector("#login").addEventListener("click", () => {
    const navigate = onNavigate("/logIn");
    rootDiv.innerHTML = navigate;
  });
}

function btnSignUp() {
  document.querySelector("#signUp").addEventListener("click", () => {
    const navigate = onNavigate("/signUp");
    rootDiv.innerHTML = navigate;
  });
}

window.addEventListener("DOMContentLoaded", () => {
  rootDiv = document.getElementById("root");
  rootDiv.innerHTML = routes[window.location.pathname];
  btnLogin();
  btnSignUp();
  // eventodeboton
});

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
  btnLogin();
  btnSignUp();
};
