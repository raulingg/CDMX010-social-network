import { savePost, updatePost, getPostById } from './lib/firebase.js';

const getSearchParam = (param) => (new URLSearchParams(window.location.search)).get(param);

export const posting = async (target) => {
  const html = `
  <div id="post-form">
    <form id="form">
      <h1>Escribe tu post</h1>
      <input id="title" type="text" placeholder="Título" required>
      <input id="location" type="text" placeholder="Coordenadas" required>
      <textarea id="description" type="text" placeholder="Descripción" required minlength="20" rows="8"></textarea>
      <button id="save" value="submit">Publicar</button>
    </form>  
  </div>
  `;
  target.innerHTML = html;

  const postId = getSearchParam('id')
  const postForm = document.getElementById('form');
  postForm.title.focus();
  let post = null

  if (postId) {
    post = await getPostById(postId);
    postForm.title.value = post.title;
    postForm.location.value = post.location;
    postForm.description.value = post.description;
    postForm.save.innerText = 'Actualizar'; 
  }

  postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const postData = {
      title: postForm.title.value,
      location: postForm.location.value,
      description: postForm.description.value,
      likes: post && post.likes ? post.likes : 0,
    };

    if (post) {
      await updatePost(postId, postData);
      postForm.save.innerText = 'Guardar';
    } else {
      await savePost(postData);
      // limpia o resetea el formulario
      postForm.reset();
    }
  });
};

export default posting;
