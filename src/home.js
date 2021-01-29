import { postBuilder } from './postBuilder.js';
import { createPosts } from './lib/firebase.js';

export const home = () => `
    <h1>Home</h1>
    ${postBuilder()}
`;

window.addEventListener('DOMContentLoaded', () => {
    let button = document.getElementById('post-button');
    button?.addEventListener('click', () => {
        let message = document.getElementById('post').value;
        createPosts({message, user:'Adrianititititita'})
    });
});