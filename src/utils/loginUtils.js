import { loginUser } from '../lib/firebase.js';
import { onNavigate } from '../routes.js';

const rootDiv = document.getElementById('root');

export const loginFunc = () => {
  document.querySelector('#enter').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#loginEmail').value;
    const password = document.querySelector('#loginPassword').value;
    // console.log(email + password);
    // usuarios existentes en auth
    loginUser(email, password, onNavigate, rootDiv);
  });
};
