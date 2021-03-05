import { buildReview } from '../lib/firebase.js';

// const postCont = document.querySelector('#postContainer');

// subir info a firestore
export const newReview = async () => {
  //   document.querySelector('#postIt').addEventListener('click', (e) => {
  //     e.preventDefault();
  const name = document.querySelector('#name').value;
  const post = document.querySelector('#review').value;
  console.log(name, post);
  // comenzar firebase registra posteos en fs
  await buildReview(name, post);
  //   });
};

// metodo para obtener datos
// export const cbackReview = () => {
//   getCollectonReview();// funcion firebase
// };
