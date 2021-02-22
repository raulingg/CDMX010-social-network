export default ({ user }) => `
  <ul>
      <li><a href="#" id="home">Home</a></li>
      ${user ? '<li><a href="#" id="signOut">Logout</a></li>' : ''}
  </ul>
`;
