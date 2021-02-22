export default (post) => `
<article class="post" data-id="${post.id}">
  <p data-behavior="onEditPost" style="white-space: pre-wrap">${post.message}</p>
  <p>${post.user}</p>
  <p>${post.createdAt}</p>
  <button data-behavior="onRemovePost">X</button>
  <br />
  <br />
</article>
`;
