import CardPost from './components/CardPost.js';
import { deletePost, getAllPosts } from './lib/firebase.js';
import { onNavigate } from './routes.js';

export const post = async (target) => {
  const templeteHome = `
    <div id="post-container"></div>
  `;
  target.innerHTML = templeteHome;
  
  const posts = await getAllPosts()
  
  // render posts
  const postTemplates = posts.map(post => CardPost(post));
  const postContainer = document.getElementById('post-container');
  postContainer.innerHTML = postTemplates.join('');
  
  // register/attach edit events
  const btnsEdit = document.querySelectorAll('.btn-edit');
  btnsEdit.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      
      const url = new URL(e.currentTarget.href)
      onNavigate(url.pathname + url.search);   
    });
  });
  
  // register/attach delete events
  const btnsDelete = document.querySelectorAll('.btn-delete');
  btnsDelete.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const confirmar = confirm('¿Seguro que quieres borrar tu post?');
      if (confirmar) {
        deletePost(e.target.dataset.id);
      }
    });
  });
};

export default post;
