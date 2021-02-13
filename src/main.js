import FirebaseClientFactory from './lib/firebaseClient.js';
import * as router from './router.js';
import HomeController from './pages/home/HomeController.js';
import LoginController from './pages/login/LoginController.js';

const target = document.getElementById('root');
const firebaseConfig = {
  apiKey: 'AIzaSyAxKjqTudxBWi9j9i4IDKn450hmM1m_w3A',
  authDomain: 'red-social-coaches.firebaseapp.com',
  projectId: 'red-social-coaches',
  appId: '1:489293961166:web:e0ae10e7b6db857d26fd9f',
};

firebase.initializeApp(firebaseConfig);
const firebaseClient = FirebaseClientFactory(firebase);
const routes = { '/': HomeController, '/login': LoginController };
router.load({ target, routes, dependencies: { firebaseClient } });

window.addEventListener('DOMContentLoaded', () => {
  firebase.auth().onAuthStateChanged(
    (user) => console.log(user) || router.goTo(user ? '/' : '/login'),
  );
});

window.addEventListener('popstate', () => router.dispatch(window.location.pathname));
