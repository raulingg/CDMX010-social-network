export const singlepost = (target) => {
  const templeteSinglePost = `
      <div id="post-container"></div>
    `;
  target.innerHTML = templeteSinglePost;
};
export default singlepost;
