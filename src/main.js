// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
// llamar a Firestore
const dataBase = firebase.firestore();
// llama al formulario y escucha el evento
const postForm = document.getElementById('form');
const postContainer = document.getElementById('post-container');
const postList = document.getElementById('post-list');
// guardar status
let editStatus = false;
let id = '';
const savePost = (title, location, description) =>
  dataBase.collection('post').doc().set({
    title,
    location,
    description,
  });
  // obtiene valores guardados
const getPost = () => dataBase.collection('post').get();
// de la colección quiero un documento con el id que se obtiene al dar click
const getPostInfo = (id) => dataBase.collection('post').doc(id).get();

  const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
  // para eliminar un post da un parametro id
  const deletePost = id => dataBase.collection('post').doc(id).delete();
  // función actuaalizar en firebase
  const updatePost = (id, updatedPost) =>
  dataBase.collection('post').doc(id).update(updatedPost);
  // const getPost = () => dataBase.collection('post').get();
  // agrega escuchador de evento para obtener data
  window.addEventListener('DOMContentLoaded', async (e) => {
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
        postList.innerHTML += `
        <h2 class="title-list">${post.title}</h2>
        `;
        // Botón de borrar, escucha evento y recupera la data del id
        const btnsDelete = document.querySelectorAll('.btn-delete');
        btnsDelete.forEach(btn =>{
            btn.addEventListener('click', async (e) =>{
                console.log(e.target.dataset.id);
                await deletePost(e.target.dataset.id);
            });
        });
        // Botón de editar
        const btnsEdit = document.querySelectorAll('.btn-edit');
        btnsEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await getPostInfo(e.target.dataset.id);
                console.log(doc.data());
                const postEditing = doc.data();
                editStatus = true;
                id = doc.id;
                postForm['post-title'].value = postEditing.title;
                postForm['post-location'].value = postEditing.location;
                postForm['post-description'].value = postEditing.description;
                postForm['save'].innerText = 'Actualizar';
            });
        });
    });
  });
});
postForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = postForm['post-title'];
  const location = postForm['post-location'];
  const description = postForm['post-description'];
  if (!editStatus) {
    await savePost(title.value, location.value, description.value);
  } else {
      await updatePost(id, {
          title: title.value,
          location: location.value,
          description: description.value,
      });
      editStatus = false;
      postForm['save'].innerText='Guardar';
      id = '';
  }

  // limpia o resetea el formulario
  postForm.reset();
  title.focus();
  console.log(title,location, description);
});
