/* eslint-disable no-param-reassign */

export default ({ signIn }) => {
  const html = () => `
      <div>
        <form>
          <label for="email">Email</label></br>
          <input type"email" id="email" name="email" value=""></br>
          <label for="password">Password</label></br>
          <input type"password" name="password" id="password" value=""></br>
          <input type="submit" value="Sign In">
        </form>
        <p id="errorMessage" data-testid="errorMessage"></p>
      </div>    
    `;

  const onSignInHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    e.target.value = 'Submitting ...';
    signIn(email, password).catch((error) => {
      console.log(error.message);
      document.getElementById('errorMessage').innerHTML = error.message;
      e.target.value = 'Sign In';
    });
  };

  const render = (target) => {
    target.innerHTML = html();
    document.querySelector('input[type=submit]').addEventListener('click', onSignInHandler);
  };

  return {
    render,
  };
};
