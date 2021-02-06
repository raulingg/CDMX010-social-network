/* eslint-disable no-param-reassign */
import { addGlobalEventListener } from '../../utils/index.js';

export default ({ signIn }) => ({
  html() {
    return `
      <div>
        <form>
          <label for="email">Email</label></br>
          <input type"email" id="email" name="email" value=""></br>
          <label for="password">Password</label></br>
          <input type"password" name="password" id="password" value=""></br>
          <input type="submit" value="Sign In">
        </form>
        <p id="errorMessage"></p>
      </div>    
    `;
  },
  onSignInHandler(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    e.target.value = 'Submitting ...';
    signIn(email, password).catch((error) => {
      document.getElementById('errorMessage').innerHTML = error.message;
      e.target.value = 'Sign In';
    });
  },
  render(target) {
    target.innerHTML = this.html();
    addGlobalEventListener({ event: 'click', selector: 'input[type=submit]', callback: this.onSignInHandler });
  },
});
