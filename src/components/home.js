import { postBuilder } from './postBuilder.js';
import { createPosts } from '../lib/firebase.js';

export const home = () => `
    <h1>Home</h1>
    ${postBuilder()}
    <div id="posts-container"></div>
`;
