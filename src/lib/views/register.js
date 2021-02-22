export const registerTemplate = () =>{
     
`
    <div class="cabecera">
    <div class="top">
      <div class="layer">
        <img src="img/encounter-logo.png" alt="Encounter, the feminist sound space">
      </div>
    </div>
    <div class="bottom">
      <div class="login">
        <input id= "email" class="input" type="text" placeholder="Email prueba">
        <input id= "password" class="input" type="password" placeholder="Contraseña" maxlength="16">
        <button id="register">LOGIN</button> 
      </div>
      <div class="not-password-yet">
        <div id="newAccount">+</div>
        <p>Not password yet?</p>
        <div id="recoverPassword">+</div>
        <p>Forgot your credential?</p>
      </div>
    </div>
    `;
    return registerTemplate;
};

