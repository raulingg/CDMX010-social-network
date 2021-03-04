// target es un parametro arbitrario que siempre recibe root/rootDIv
import { getAllPosts } from './lib/firebase.js';

export const home = async (target) => {
  const templeteHome = `
    <div id="back-list"><div id="post-list"></div>
`;
  target.innerHTML = templeteHome;
  const posts = await getAllPosts();
  const postTemplates = posts.map((post) => `
    <a href="#" class="single-post" data-id="${post.id}">
      <h2 class="title-list">${post.title}</h2>
    </a>
  `);

  const postList = document.getElementById('post-list');
  postList.innerHTML = postTemplates.join('');

  const btnsPost = document.querySelectorAll('.single-post');
  btnsPost.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      onNavigate('/singlepost');
      // const doc = await getPostInfo(e.target.dataset.id);
      // console.log(doc);
    });
  });
};

export default home;
