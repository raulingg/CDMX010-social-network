// llamar a Firestore
const dataBase = firebase.firestore();
// llama al formulario y escucha el evento
const postForm = document.getElementById('post-form');
const postContainer = document.getElementById('post-container');
// guardar status
let editStatus = false;
let id = '';
const savePost = (title, description) =>
  dataBase.collection('post').doc().set({
    title,
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
        querySnapshot.forEach((doc) => {
        // contante para llamar la data del post
        const post = doc.data();
        // llama al id del post
        post.id = doc.id;
        // console.log(post);
        postContainer.innerHTML += `
        <div>
            <h2>${post.title}</h2>
            <p>${post.description}</p>
            <button class="btn-delete" data-id="${post.id}"><i class="far fa-trash-alt"></i></button>
            <button class="btn-edit" data-id="${post.id}"><i class="fas fa-pencil-alt"></i></button>
        </div>
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
  const description = postForm['post-description'];
  if (!editStatus) {
    await savePost(title.value, description.value);
  } else {
      await updatePost(id, {
          title: title.value,
          description: description.value,
      });
      editStatus = false;
      postForm['save'].innerText='Guardar';
      id = '';
  }
  postForm.reset();
  title.focus();
  console.log(title, description);
});