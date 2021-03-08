import {createAccount} from '../lib/firebase.js';
import { onNavigate } from '../router.js';

export const toViewSingUp = `
<div class="allContainer">
 <div class="section">
  <form id="singUp-form" action="">
   <div class="formGroup">
    <input type="text" id="signUp-name" class="form-control" placeholder="Nombre" required>
   </div>
   <div class="formGroup">
     <input type="text" id="signUp-email" class="form-control" placeholder="Ingresa tu email" required>
   </div>
   <div class="formGroup">
     <input type="password" id="signUp-password" class="form-control" placeholder="Ingresa tu contraseña" required>
   </div>
   <button type="submit" class="btnTypeB">Crear cuenta</button>
  </form>
 </div>
</div>
`;

const singUpForm = document.querySelector('#singUp-form');
singUpForm.addEventListener('submit',(e) => {
    e.preventDefault();
    const singUpName = document.querySelector('#signUp-name').value;
    const singUpEmail = document.querySelector('#signUp-email').value;
    const singUpPassword = document.querySelector('#signUp-password').value;
    createAccount(singUpName,singUpEmail,singUpPassword);
    singUpForm.reset();
    onNavigate('/singup');
});
    // console.log(singUpEmail, singUpPassword);