/* eslint-disable quotes */
import { newUserAccount, loginUser, googleAuth, facebookAuth, buildReview } from './lib/firebase.js';
import { routes, onNavigate } from "./routes.js";
import { signupFunc } from './components/signup.js';
import { loginFunc } from './components/login.js';
import { places, placeCard, setCards } from './components/places.js';
import { newReview } from "./components/retro.js";
// import { newReview } from "./utils/retroviewUtils.js";
// import { places, placeCard } from "./views/placeCards.js";
// import { setCards } from "./utils/firstviewUtils.js";

let rootDiv = null;

// panatalla welcome
function btnLogin() {
  const navigate = onNavigate("/logIn");
  rootDiv.innerHTML = navigate;
}

// panatalla welcome
function btnSignUp() {
  const navigate = onNavigate("/signUp");
  rootDiv.innerHTML = navigate;
}

// ambas pantallas
function back() {
  const navigate = onNavigate("/");
  rootDiv.innerHTML = navigate;
}

// ambas pantallas
function loginGmail() {
  googleAuth(onNavigate, rootDiv);
}

// ambas pantallas
function loginFacebook() {
  facebookAuth(onNavigate, rootDiv);
}

// pantalla 3 de
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

// function postnew() {
//   newReview();
// }

// function bReviews() {
// se lleva a la firebase cuando cambie de vista a reseña
//
//   const oneReview = reviewCard();
//   const reviewsContainer = document.querySelector("#reviewsContainer");
//   reviewsContainer.innerHTML = oneReview;
// }

window.addEventListener("DOMContentLoaded", () => {
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
    } else if (target.id === "postIt") {
      newReview(buildReview);
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
