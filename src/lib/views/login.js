import { onNavigate } from '../../router.js'

export const loginTemplate = (target) => {
    const html = `
        <div class="cabecera">
        <div class="top">
          <div class="layer">
            <img src="img/encounter-logo.png" alt="Encounter, the feminist sound space">
          </div>
        </div>
        <div class="bottom">
          <div class="login">
            <input id= "emailSignIn" class="input" type="text" placeholder="Email">
            <input id= "passwordSignIn" class="input" type="password" placeholder="Contraseña" maxlength="16">
            <button id="access">LOGIN</button> 
          </div>
          <div class="not-password-yet">
            <div id="newAccount"><a href="#" id="newAccountLink">+</a></div>
            <p>Not password yet?</p>
            <div id="recoverPassword">+</div>
            <p>Forgot your credential?</p>
          </div>
        </div>
        `;

        target.innerHTML = html
        const access = document.getElementById("access");

        document.getElementById('newAccountLink').addEventListener('click', (e) => {
          e.preventDefault();
          onNavigate('/contact')
        })
        
        access.addEventListener("click", () => { 
            let emailSignIn = document.getElementById("emailSignIn").value;
            let passwordSignIn = document.getElementById("passwordSignIn").value;
            signIn (emailSignIn, passwordSignIn);
                console.log("este usuario si pudo ingresar");
});
return target;
}

    




