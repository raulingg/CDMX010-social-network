import { home } from '../components/home.js';
import { createPosts, getUser } from '../lib/firebase.js'

export const homeController = () => {
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = home();
    let button = document.getElementById('post-button');
    button?.addEventListener('click', () => {
        const user = getUser();
        console.log(user);
        let message = document.getElementById('post').value;
        createPosts({message, user: user.email})
    });
};