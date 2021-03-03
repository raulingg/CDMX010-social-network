import { onGetPost, getPosts, traedatos } from '../lib/firebase.js';
import { templetehome } from '../components/templetehome.js';

traedatos();
getPosts();
console.log(getPosts);

export const printData = onGetPost((querySnapshot) => {
    const home = templetehome;
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = home;
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';
  querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
    const post = doc.data();
    // llama al id del post
    post.id = doc.id;
    // console.log(post);
    postList.innerHTML += `
        <a href="#" class="single-post" data-id="${post.id}">
          <h2 class="title-list">${post.title}</h2>
        </a>
      `;
  });
});