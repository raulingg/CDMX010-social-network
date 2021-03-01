export const post = (target) => {
  const templeteHome = `
    <div id="post-container"></div>
  `;
  target.innerHTML = templeteHome;
};
export default post;
