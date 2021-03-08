import {inLogIn, toLogFacebook, toLogGoogle} from '../lib/firebase.js';
import { onNavigate } from '../router.js';


export const toViewLogIn = (container) => {
  const html = `
  <div class="allContainer">
   <div class="section">
    <form id="logIn-form" action="">
    <button type="button" class="btnType" id="googleAccess">Inicia sesión con google</button>
    <button type="button" class="btnType" id="facebookAccess">Inicia sesión con Facebook</button>
     <div class="formGroup">
      <input type="text" id="logIn-email" class="form-control" placeholder="Ingresa tu email" required>
     </div>
     <div class="formGroup">
      <input type="password" id="logIn-password" class="form-control" placeholder="Ingresa tu contraseña" required>
     </div>
     <button type="submit" class="btnTypeB">Iniciar Sesión</button>  
    </form>
   </div>
  </div>
  `;

  container.innerHTML = html;
  //Iniciar Sesión
  
  const myLogInForm = document.querySelector('#logIn-form');
  myLogInForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const logInEmail = document.querySelector('#logIn-email').value;
      const logInPassword = document.querySelector('#logIn-password').value;
      inLogIn(logInEmail,logInPassword);
      onNavigate('/login');
      // console.log(logInEmail, logInPassword)
  });
  
  const facebookButton = document.querySelector('#facebookAccess');
   facebookButton.addEventListener('click', e => {
    e.preventDefault();
    toLogFacebook();
  });
  
  const googleButton = document.querySelector('#googleAccess');
    googleButton.addEventListener('click', e => {
      e.preventDefault();
      toLogGoogle();
  });
}
