// En este documento solamente tenemos lo que manipula el DOM
import { routes, onNavigate } from './routes.js';
// Importamos navigate para manipular el DOM con los botones del footer
import { dataBase, savePost, getPostInfo, onGetPost, deletePost, updatePost } from './lib/firebase.js';
import { posting } from './posting.js';
import { home } from './home.js';
import { post } from './post.js';
import CardPost from './components/CardPost.js';

posting();
const rootDiv = document.getElementById('root');
const postForm = document.getElementById('form');

// vista al cargar home
window.addEventListener('DOMContentLoaded', () => {
  const home = routes[window.location.pathname];
  home(rootDiv);
  onGetPost((querySnapshot) => {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
      const post = doc.data();
      // llama al id del post
      post.id = doc.id;
      // console.log(post);
      postList.innerHTML += `
        <a href="#" class="single-post"><h2 class="title-list">${post.title}</h2></a>
        `;
    });
  });
});

// myFunction();
// Funciones para botones de navegación
document.getElementById('toHome').addEventListener('click', async (e) => {
  e.preventDefault();
  onNavigate('/');
  home(rootDiv);
  onGetPost((querySnapshot) => {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';
    querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
      const post = doc.data();
      // llama al id del post
      post.id = doc.id;
      // console.log(post);
      postList.innerHTML += `
      <a href="#" class="single-post" data-id="${post.id}"><h2 class="title-list">${post.title}</h2></a>
        `;
      const btnsPost = document.querySelectorAll('.single-post');
      btnsPost.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          e.preventDefault();
          onNavigate('/singlepost');
          const doc = await getPostInfo(e.target.dataset.id);
          console.log(doc);
        });
      });
    });
  });
});
const toForm = document.getElementById('toForm');
toForm.addEventListener('click', async (e) => {
  e.preventDefault();
  onNavigate('/posting');
  posting();
  let editStatus = false;
  const postForm = document.getElementById('form');
  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = postForm['post-title'];
    const location = postForm['post-location'];
    const description = postForm['post-description'];
    let likes = '0';
    let id = '';
    if (!editStatus) {
      await savePost(title.value, location.value, description.value, likes);
    } else {
      await updatePost(id, {
        title: title.value,
        location: location.value,
        description: description.value,
        likes: likes.value,
      });
      editStatus = false;
      postForm.save.innerText = 'Guardar';
      id = '';
    }
    // limpia o resetea el formulario
    postForm.reset();
    title.focus();
    console.log(title, location, description);
    e.preventDefault();
  });
});
document.getElementById('toPost').addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
  post(rootDiv);
  onGetPost((querySnapshot) => {
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';
    querySnapshot.forEach((doc) => {
    // contante para llamar la data del post
      const post = doc.data();
      // llama al id del post
      post.id = doc.id;
      console.log(post.id);
      // console.log(post);
      postContainer.innerHTML += CardPost(post);
      editP();
      const btnsDelete = document.querySelectorAll('.btn-delete');
      btnsDelete.forEach(btn => {
        btn.addEventListener('click', async (e) => {
          const confirmar = confirm('¿Seguro que quieres borrar tu post?');
          if (confirmar === true) {
            await deletePost(e.target.dataset.id);
          }
        });
      });
    });
  });
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
function editP() {
  const btnsEdit = document.querySelectorAll('.btn-edit');
  btnsEdit.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      onNavigate('/posting');
      const postForm = document.getElementById('form');
      const doc = await getPostInfo(e.target.dataset.id);
      const postEditing = doc.data();
      editStatus = true;
      id = doc.id;
      postForm['post-title'].value = postEditing.title;
      postForm['post-location'].value = postEditing.location;
      postForm['post-description'].value = postEditing.description;
      postForm['save'].innerText = 'Actualizar';    
    });
  });
}
// Botón de editar
const btnsEdit = document.querySelectorAll('.btn-edit');
btnsEdit.forEach(btn => {
  btn.addEventListener('click', async (e) => {
    const doc = await getPostInfo(e.target.dataset.id);
    const postEditing = doc.data();
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
