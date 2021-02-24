/* eslint-disable quotes */
// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();
import { routes, onNavigate } from "./routes.js";
import { googleAuth, newUserAccount, loginUser } from "./lib/firebase.js";

let rootDiv = null;

function back() {
  document.querySelector('#returnArrow').addEventListener('click', () => {
    const navigate = onNavigate('/');
    rootDiv.innerHTML = navigate;
  });
}

function btnLogin() {
  document.querySelector("#login").addEventListener("click", () => {
    const navigate = onNavigate("/logIn");
    rootDiv.innerHTML = navigate;
    document.querySelector('#enter').addEventListener('click', () => {
      const email = document.querySelector('#loginEmail').value;
      const password = document.querySelector('#loginPassword').value;
      // console.log(email + password);
      loginUser(email, password);
    });
    back();
  });
}

function btnSignUp() {
  document.querySelector("#signUp").addEventListener("click", () => {
    const navigate = onNavigate("/signUp");
    rootDiv.innerHTML = navigate;
    document.querySelector('#btnSignUp').addEventListener('click', () => {
      const email = document.querySelector('#signupEmail').value;
      const password = document.querySelector('#signupPassword').value;
      // console.log(email + password + passwordAgain);
      newUserAccount(email, password);
    });
    document.querySelector('.btnGmail').addEventListener('click', googleAuth);
    back();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  rootDiv = document.getElementById("root");
  rootDiv.innerHTML = routes[window.location.pathname];
  btnLogin();
  btnSignUp();
  // console.log(document.querySelector('#returnArrow'));
  // eventodeboton
});

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
  btnLogin();
  btnSignUp();
};
