import { onNavigate } from "../routes.js";

export const welcome = (target, firebase) => {
   const html = `
   <div id="welcomeView">
       <img id="logo" src="img/logo_mochilazo.png" alt="MXCHILAZO">
       <input type="button" id="login" class="btnLogin" value="INICIAR SESIÓN">
       <input type="button" id="signUp" class="btnSignUp" value="REGISTRATE">
   </div>
   `;
   target.innerHTML = html;
   
   const btnLogin = document.getElementById('login');
   btnLogin.addEventListener('click', () => {
       onNavigate('/logIn')
    })
    
    const btnSignUp = document.getElementById('signUp');
    btnSignUp.addEventListener('click', () => {
        onNavigate("/signUp");
    })
}