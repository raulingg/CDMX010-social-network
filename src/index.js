// Este es el punto de entrada de tu aplicacion
import {registration, signIn} from "./lib/firebase.js" 

const register = document.getElementById("register");
register.addEventListener("click", () => { 
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    registration(email, password);
});

const access = document.getElementById("access");
access.addEventListener("click", () => { 
    let emailSignIn = document.getElementById("emailSignIn").value;
    let passwordSignIn = document.getElementById("passwordSignIn").value;
    signIn (emailSignIn, passwordSignIn);
    console.log("este usuario si pudo ingresar");
});


/*
crear una funcion que despliegue mi home, cuando el usuario de click (addEventListener) en 
el botón de Submit y este sea admitido por el observador. Clausula: la manipulación del DOM
tiene que ir en login.js
*/

// const displayHome = document.getElementById("home");
// if (user.emailVerified){
//     content()
// };


// let user = user;
//    const contenido = document.getElementById("");
//    contenido.addEventListener("click", () =>{
//     if (user.emailVerified){ 
//         contenido.innerHTML = `
//         <p>Bienvenida</p>
//         <button>Cerrar sesión</button>
//         `
//         };
//    })
   
// function home (user) {
     
//   };
