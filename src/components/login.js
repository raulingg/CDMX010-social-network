import { login } from '../lib/firebase.js';
import { onNavigate } from '../utils/router.js';

export const loginComponent = () => {
    return `<form>
                <label>Email</label>
                <input type"email" id="email">
                <label>Password</label>
                <input type"password" id="password">
                <button id="send-button">Send</button>
            </form>`
};
