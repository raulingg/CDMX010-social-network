export default () => `
  <ul>
      <li><a href="#" id="home">Home</a></li>
      ${firebase.auth().currentUser ? '<li><a href="#" id="signOut">Logout</a></li>' : ''}
  </ul>
`;
