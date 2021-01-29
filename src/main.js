import FirebaseWrapper from './lib/firebase.js';
import * as router from './router.js';
import Home from './pages/home/Home.js';
import Login from './pages/Login.js';

const targetElement = document.getElementById('root');

const firebaseConfig = {
  apiKey: 'AIzaSyAxKjqTudxBWi9j9i4IDKn450hmM1m_w3A',
  authDomain: 'red-social-coaches.firebaseapp.com',
  projectId: 'red-social-coaches',
  appId: '1:489293961166:web:e0ae10e7b6db857d26fd9f',
};

firebase.initializeApp(firebaseConfig);
const dependencies = FirebaseWrapper(firebase);
const routes = { '/': Home(dependencies), '/login': Login(dependencies) };
router.load(targetElement, routes);

window.addEventListener('DOMContentLoaded', () => {
  router.render(window.location.pathname);

  firebase.auth().onAuthStateChanged((user) => {
    console.log('user has changed', user);
    router.dispatchAndRender(user ? '/' : '/login');
  });
});

window.addEventListener('popstate', () => router.render(window.location.pathname));
