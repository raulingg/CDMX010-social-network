import { login } from './lib/firebase.js';
import { onNavigate } from './utils/router.js';

export const loginComponent = () => {
    return `<form>
                <label>Email</label>
                <input type"email" id="email">
                <label>Password</label>
                <input type"password" id="password">
                <button id="send-button">Send</button>
            </form>`
};

window.addEventListener('DOMContentLoaded', () => {
    let sendButton = document.getElementById('send-button');
    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        login(email, password)
        .then(() => onNavigate('/home'))
    });
});