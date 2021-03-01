// target es un parametro arbitrario que siempre recibe root/rootDIv
export const home = (target) => {
  const templeteHome = `
    <div id="back-list"><div id="post-list"></div>
`;
  target.innerHTML = templeteHome;
};
export default home;
