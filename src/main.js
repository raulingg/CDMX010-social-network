/* eslint-disable quotes */
import { newUserAccount, loginUser, googleAuth, facebookAuth, buildReview, onGetReviews, deleteReview, getReview, editReview } from './lib/firebase.js';
import { routes, onNavigate } from "./routes.js";
import { signupFunc } from './components/signup.js';
import { loginFunc } from './components/login.js';
import { places, placeCard, setCards } from './components/places.js';
import { newReview, seeReviews, quitReview, modifyReview, updateReview, likesReview } from "./components/retro.js";

let rootDiv = null;
// let reviewId = e.target.dataset.id;

// panatalla welcome
function btnLogin() {
  const navigate = onNavigate("/logIn");
  rootDiv.innerHTML = navigate;
}

// pantalla welcome
function btnSignUp() {
  const navigate = onNavigate("/signUp");
  rootDiv.innerHTML = navigate;
}

// ambas pantallas
function back() {
  const navigate = onNavigate("/");
  rootDiv.innerHTML = navigate;
}

// pantalla 3 de
export function lugares() {
  const html = setCards(places, placeCard);
  const cardPlace = document.querySelector("#placesContainer");
  cardPlace.innerHTML = html;
}

// ambas pantallas
function loginGmail() {
  googleAuth(onNavigate, rootDiv, lugares);
}

// ambas pantallas
function loginFacebook() {
  facebookAuth(onNavigate, rootDiv, lugares);
}

function viewOnePlace() {
  const navigate = onNavigate("/bellasArtes");
  rootDiv.innerHTML = navigate;
}

export function limpiar() {
  // const limpiar =
  document.getElementsByClassName("clear")[0].value = "";
  // return limpiar;
}

export function reLimpiar() {
  // const reLimpiar =
  document.getElementsByClassName("clear")[1].value = "";
  // return reLimpiar;
}

window.addEventListener("DOMContentLoaded", () => {
  let updateId = null;
  rootDiv = document.getElementById("root");
  rootDiv.innerHTML = routes[window.location.pathname];
  rootDiv.addEventListener("click", (event) => {
    const target = event.target;
    // if (target.id !== 'signUp' && target.id !== 'login') return;
    if (target.id === "login") {
      btnLogin();
    } else if (target.id === "signUp") {
      btnSignUp();
    } else if (target.id === "btnSignUp") {
      signupFunc(newUserAccount, onNavigate, rootDiv, lugares);
    } else if (target.id === "enter") {
      loginFunc(loginUser, onNavigate, rootDiv, lugares);
    } else if (target.id === "btnGmail") {
      loginGmail();
    } else if (target.id === "btnFacebook") {
      loginFacebook();
    } else if (target.id === "returnArrow") {
      back();
    } else if (target.id === "placeImg") {
      viewOnePlace();
      seeReviews(onGetReviews);
    } else if (target.id === "postIt") {
      newReview(buildReview, limpiar, reLimpiar);
      seeReviews(onGetReviews);
      // limpiar();
      // reLimpiar();
    } else if (target.id === "btnDelete") {
      quitReview(deleteReview, target.dataset.id);
    } else if (target.id === "btnEdit") {
      modifyReview(getReview, target.dataset.id);
      updateId = target.dataset.id;
    } else if (target.id === "editPostIt") {
      updateReview(editReview, updateId, limpiar, reLimpiar);
    } else if (target.id === "likeIcon") {
      likesReview();
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
