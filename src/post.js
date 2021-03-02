// import CardPost from './components/CardPost';

export const post = (target) => {
  // const postContainer = document.getElementById('post-container');
  const templeteHome = `
    <div id="post-container"></div>
  `;
  target.innerHTML = templeteHome;
  // postContainer.innerHTML = CardPost;
};
export default post;
