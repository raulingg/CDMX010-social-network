export default ({ signIn }) => {
  const render = () => `
    <div>
      <form>
        <label for="email">Email</label></br>
        <input type"email" id="email" name="email" value=""></br>
        <label for="password">Password</label></br>
        <input type"password" name="password" id="password" value=""></br>
        <input type="submit" id="submitBtn" value="Sign In">
      </form>
      <p id="errorMessage"></p>
    </div>    
  `;

  const attachListeners = () => {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      signIn(email, password)
        .catch((error) => {
          document.getElementById('errorMessage').innerHTML = error.message;
        });
    });
  };

  return { render, attachListeners };
};
