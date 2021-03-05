/* eslint-disable quotes */
import { routes, onNavigate } from "./routes.js";
import { googleAuth, facebookAuth } from "./lib/firebase.js";
import { signupFunc } from "./utils/signupUtils.js";
import { loginFunc } from "./utils/loginUtils.js";
import { newReview } from "./utils/retroviewUtils.js";
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

export function lugares() {
  const html = setCards(places, placeCard);
  const cardPlace = document.querySelector("#placesContainer");
  cardPlace.innerHTML = html;
}

function viewOnePlace() {
  const navigate = onNavigate("/bellasArtes");
  rootDiv.innerHTML = navigate;
  // cargar aqui la info del contenedor rewies
}

function postnew() {
  newReview();
}

function bReviews() {
  // se lleva a la firebase cuando cambie de vista a reseña
  const oneReview = reviewCard();
  const reviewsContainer = document.querySelector("#reviewsContainer");
  reviewsContainer.innerHTML = oneReview;
}

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
    } else if (target.id === "placeImg") {
      viewOnePlace();
    } else if (target.id === "postIt") {
      postnew();
    }
  });
  // console.log(document.querySelector('#returnArrow'));
  // eventodeboton
});

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
  btnLogin();
  btnSignUp();
};
