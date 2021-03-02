import { newUserAccount } from '../lib/firebase.js';
import { onNavigate } from '../routes.js';

const rootDiv = document.getElementById('root');

export const signupFunc = () => {
  document.querySelector('#btnSignUp').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#signupEmail').value;
    const password = document.querySelector('#signupPassword').value;
    // comenzar firebase registra nuevos usuarios con auth
    newUserAccount(email, password, onNavigate, rootDiv);
  });
};
