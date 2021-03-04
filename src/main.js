// En este documento solamente tenemos lo que manipula el DOM
import { onNavigate } from './routes.js';
// Importamos navigate para manipular el DOM con los botones del footer
import { getPostById } from './lib/firebase.js';

const postForm = document.getElementById('form');

// Funciones para botones de navegación
document.getElementById('toHome').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});

document.getElementById('toPosting').addEventListener('click', async (e) => {
  e.preventDefault();
  onNavigate('/posting');
});

document.getElementById('toPost').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});
// const btnsDelete = document.querySelectorAll('.btn-delete');
// console.log(btnsDelete);
// btnsDelete.forEach(btn => {
//   console.log('main');
//   btn.addEventListener('click', async (e) => {
//     const confirmar = confirm('¿Seguro que quieres borrar tu post?');
//     if (confirmar === true) {
//       await deletePost(e.target.dataset.id);
//     }
//   });
// });
// llama al formulario y escucha el evento


// guardar status
let editStatus = false;

// obtiene valores guardados
// const getPost = () => dataBase.collection('post').get();
// const getPost = () => dataBase.collection('post').get();
// agrega escuchador de evento para obtener data


// cambiar para cargar en evento click
/* window.addEventListener('DOMContentLoaded', async (e) => {
  onGetPost((querySnapshot) => {
    postContainer.innerHTML = '';
    postList.innerHTML = '';
    querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
      const post = doc.data();
      // llama al id del post
      post.id = doc.id;
      // console.log(post);
      postContainer.innerHTML += `
        <div id="mainPost">
            <h2 class="title">${post.title}</h2>
            <p class="plocation">${post.location}</p>
            <p class="pdescription">${post.description}</p>
            <div id="icons">
              <i class="far fa-trash-alt btn-delete" data-id="${post.id}"></i>
              <span><i class="fas fa-heart"></i></span>
              <i class="fas fa-pencil-alt btn-edit" data-id="${post.id}"></i>
            </div>  
        </div>
        `;
      rootDiv.innerHTML += `
        <h2 class="title-list">${post.title}</h2>
        `;
    });
  });
}); */
// Botón de confirmar para eliminar. Manipulación del DOM.
/* const btnsDelete = document.querySelectorAll('.btn-delete');
btnsDelete.forEach(btn => {
  console.log('main');
  btn.addEventListener('click', async (e) => {
    const confirmar = confirm('¿Seguro que quieres borrar tu post?');
    if (confirmar === true) {
      await deletePost(e.target.dataset.id);
    }
  });
}); */
// Botón borrar con confirmación
/* const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const confirmar = confirm('¿Seguro que quieres borrar tu post?');
          if (confirmar === true) {
            await deletePost(e.target.dataset.id);
          }
        });
      }); */
// Botón de borrar, escucha evento y recupera la data del id
/*         const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn =>{
            btn.addEventListener('click', async (e) =>{
                console.log(e.target.dataset.id);
                await deletePost(e.target.dataset.id);
            });
        }); */
// Botón de editar
const btnsEdit = document.querySelectorAll('.btn-edit');
btnsEdit.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const postEditing =  await getPostInfo(e.target.dataset.id);
    editStatus = true;
    id = doc.id;
    postForm['post-title'].value = postEditing.title;
    postForm['post-location'].value = postEditing.location;
    postForm['post-description'].value = postEditing.description;
    postForm['save'].innerText = 'Actualizar';
  });
});

// Botón de cada post
const btnsPost = document.querySelectorAll('.single-post');
btnsPost.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    onNavigate('/singlepost');
  });
});
