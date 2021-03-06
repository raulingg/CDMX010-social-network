// import { onNavigate } from '../routes.js';

// const rootDiv = document.getElementById('root');

export const signUpView = `
<div id="signUpViewContainer" class="container">
    <img id="logo" src="img/logo_mochilazo.png" alt="MXCHILAZO">
    <h2>CREAR CUENTA</h2>
    <input type="email" id="signupEmail" class="input" placeholder="Correo electrónico" required>
    <input  type="password" id="signupPassword" class="input" placeholder="Contraseña" required>
    <input type="button" id="btnSignUp" class="btnSignUp" value="REGISTRARME">
    <h3>o con tus redes sociales</h3> 
    <button type="submit"  id="btnGmail" class="btnGmail"><img src="img/google.png" alt="Gmail" id="gmailIcon"></button>
    <button type="submit" id="btnFacebook" class="btnFacebook"><img src="img/facebook.png" alt="Facebook" id="facebookIcon"></button>
    <input type="image" id="returnArrow" class="returnArrow" src="img/Vector.png">
  </div>
`;

export const signupFunc = (newUserAccount, onNavigate, rootDiv, lugares) => {
  const email = document.querySelector('#signupEmail').value;
  const password = document.querySelector('#signupPassword').value;
  // comenzar firestore registra nuevos usuarios con auth
  newUserAccount(email, password, onNavigate, rootDiv, lugares);
};
