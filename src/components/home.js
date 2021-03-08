import {toViewLogIn} from './login.js';
import {toViewSingUp} from './singup.js';
// import {onNavigate} from '../router.js';
export const toViewHome = 
  `
  <div class="allContainer">
   <div class="section">  
     <button type="button" class="btnType" id="toInit">Iniciar sesión</button>
     <button type="button" class="btnType" id="toCreate">Crear cuenta</button>
    </form>
   </div>
  </div>
  `;

    const toInitB = document.getElementById("toInit") 
    toInitB.addEventListener('click', (e) => {
     e.preventDefault();
    //  console.log("entro a boton inicio");  
    root.innerHTML = "";
    root.innerHTML = toViewLogIn;
     })

 
    const toCreateB = document.getElementById("toCreate") 
    toCreateB.addEventListener('click', (e) => {
     e.preventDefault();
    //  console.log("entro a boton inicio");  
    root.innerHTML = "";
    root.innerHTML = toViewSingUp;
     })

// window.addEventListener('DOMContentLoaded', () => {
//   const toInitB = document.getElementById("toInit") 
//   toInitB.addEventListener('click', (e) => {
//    e.preventDefault();
//   //  console.log("entro a boton inicio");  
//   root.innerHTML = "";
//   root.innerHTML = toViewLogIn;
//   onNavigate('/login');
//    })
// });
// window.addEventListener('DOMContentLoaded', () => {
//   const toCreateB = document.getElementById("toCreate") 
//   toCreateB.addEventListener('click', (e) => {
//    e.preventDefault();
//   //  console.log("entro a boton inicio");  
//   root.innerHTML = "";
//   root.innerHTML = toViewSingUp;
//   onNavigate('/singup');
//    })
// });
