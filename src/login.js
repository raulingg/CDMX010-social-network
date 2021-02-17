// Este es el punto de entrada de tu aplicacion
import {registrar, signIn} from "./lib/firebase.js"

const registro = document.getElementById("registro");
  registro.addEventListener("click", () => { 
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      registrar (email, password);
    // const register = registrar (email, password);
    // console.log(register);
  });

  const ingreso = document.getElementById("signIn");
  ingreso.addEventListener("click", () => { 
      let emailSignIn = document.getElementById("emailSignIn").value;
      let passwordSignIn = document.getElementById("passwordSignIn").value;
      signIn (emailSignIn, passwordSignIn);
    // const register = registrar (email, password);
    console.log("este usuario si pudo ingresar");
  });




// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyCBbc4-QZcuS9hpij5G3SZUC3PS4yenuvQ",
//     authDomain: "encounter-laboratoria2021.firebaseapp.com",
//     projectId: "encounter-laboratoria2021",
//     storageBucket: "encounter-laboratoria2021.appspot.com",
//     messagingSenderId: "577031064049",
//     appId: "1:577031064049:web:3b0acf39eaaad6ddbc5c50",
//     measurementId: "G-NESVHDG3JE"
//   };
    
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  
  //--------------ESTO FUNCIONA-------------
//   const registro = document.getElementById("registro");
//   registro.addEventListener("click", () => { 
//       let email = document.getElementById("email").value;
//       let password = document.getElementById("password").value;
//       firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((user) => {
//           // Signed in
//           // ...
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorCode);
//             console.log(errorMessage);
//             // ..
//         });
//     }); 
    
    // return  

    





//   const registro = document.getElementById("registro");
//     registro.addEventListener("click", () => { 
//     console.log ("diste un click");
//     });


// Este es el punto de entrada de tu aplicacion
/*
import { myFunction } from './lib/index.js';

myFunction();
*/