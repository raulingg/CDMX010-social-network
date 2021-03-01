import { toViewHome } from './main.js';
export const toViewLogIn = `
<div class="allContainer">
 <div class="section">
  <form id="logIn-form" action="">
   <div class="formGroup">
    <input type="text" id="logIn-email" class="form-control" placeholder="Usuario/Email" required>
   </div>
   <div class="formGroup">
    <input type="password" id="logIn-password" class="form-control" placeholder="Contraseña" required>
   </div>
   <button type="submit" class="btnType">Iniciar Sesión</button>
   <button type="button" class="btnType" id="googleAccess">Inicia sesión con google</button>
   <button type="button" class="btnType" id="facebookAccess">Inicia sesión con Facebook</button>
  </form>
 </div>
</div>
`;
/* <h3>Inició sesión</h3> */
