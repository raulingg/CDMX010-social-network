import { loginComponent } from '../components/login.js';
import { login } from '../lib/firebase.js';
import { onNavigate } from '../utils/router.js';

export const loginController = () => {
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = loginComponent();
    let sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        login(email, password)
        .then(() => onNavigate('/home'))
    });
};