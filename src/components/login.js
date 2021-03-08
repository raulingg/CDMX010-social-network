export const logIn = `
<div id="loginViewContainer" class="container">
    <img id="logo" src="img/logo_mochilazo.png" alt="MXCHILAZO">
    <h2>INICIAR SESIÓN</h2>
    <input type="email" id="loginEmail" class="input" placeholder="Correo electrónico" required>
    <input  type="password" id="loginPassword"class="input" placeholder="Contraseña" required>
    <input type="button" id="enter" class="btnEnter" value="ENTRAR">
    <h3>o con tus redes sociales</h3> 
    <button type="submit"  id="btnGmail" class="btnGmail"><img src="img/google.png" alt="Gmail" id="gmailIcon"></button>
    <button type="submit" id="btnFacebook" class="btnFacebook"><img src="img/facebook.png" alt="Facebook" id="facebookIcon"></button>
    <input type="image" id="returnArrow" class="returnArrow" src="img/Vector.png">
</div>
`;

export const loginFunc = (loginUser, onNavigate, rootDiv, lugares) => {
  const email = document.querySelector('#loginEmail').value;
  const password = document.querySelector('#loginPassword').value;
  // console.log(email + password);
  // usuarios existentes en auth
  loginUser(email, password, onNavigate, rootDiv, lugares);
};
