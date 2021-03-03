/* eslint-disable quotes */
import { routes, onNavigate } from "./routes.js";
import { googleAuth, facebookAuth } from "./lib/firebase.js";
import { signupFunc } from "./utils/signupUtils.js";
import { loginFunc } from "./utils/loginUtils.js";
import { places, placeCard } from "./views/placeCards.js";
import { setCards } from "./utils/firstviewUtils.js";

let rootDiv = null;

function back() {
  const navigate = onNavigate("/");
  rootDiv.innerHTML = navigate;
}

function loginGmail() {
  googleAuth(onNavigate, rootDiv);
}

function loginFacebook() {
  facebookAuth(onNavigate, rootDiv);
}

function btnLogin() {
  const navigate = onNavigate("/logIn");
  rootDiv.innerHTML = navigate;
  loginFunc();
}

function btnSignUp() {
  const navigate = onNavigate("/signUp");
  rootDiv.innerHTML = navigate;
  signupFunc();
}

// function mxchilazoView() {

// }

window.addEventListener("DOMContentLoaded", () => {
  rootDiv = document.getElementById("root");
  rootDiv.innerHTML = routes[window.location.pathname];
  rootDiv.addEventListener("click", (event) => {
    const target = event.target;
    // if (target.id !== 'signUp' && target.id !== 'login') return;
    if (target.id === "signUp") {
      btnSignUp();
    } else if (target.id === "login") {
      btnLogin();
    } else if (target.id === "btnGmail") {
      loginGmail();
    } else if (target.id === "btnFacebook") {
      loginFacebook();
    } else if (target.id === "returnArrow") {
      back();
    }
  });
  // console.log(document.querySelector('#returnArrow'));
  // eventodeboton
});

export function lugares() {
  const html = setCards(places, placeCard);
  const cardPlace = document.querySelector("#placesContainer");
  cardPlace.innerHTML = html;
}
window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
  btnLogin();
  btnSignUp();
};
