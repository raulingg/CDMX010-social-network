// // aqui exportaras las funciones que necesites

// // export const myFunction = () => {
// //   // aqui tu codigo
// //   console.log('Hola mundo!');
// // };

// (function () {
//   //Inicializar Firebase
//   // const config = {
//   //   apiKey: "AIzaSyAkFY4FYBebWtMhLNU_eTk3YyBeybH4SHI",
//   //   authDomain: "realtime01-22595.firebaseapp.com",
//   //   databaseURL: "https://realtime01-22595.firebaseio.com",
//   //   storageBucket: "realtime01-22595.appspot.com",
//   // };
//   const firebaseConfig = {
//     apiKey: "AIzaSyDP4-xDQtn-5NB8-ICDuVPVNmxzB3WrYcE",
//     authDomain: "red-social--mxchilazo.firebaseapp.com",
//     projectId: "red-social--mxchilazo",
//     storageBucket: "red-social--mxchilazo.appspot.com",
//     messagingSenderId: "905471998919",
//     appId: "1:905471998919:web:5e4ea20b0acc71d53e77e2",
//     measurementId: "G-01G90LYKY6"
//   };
//   firebase.initializeApp(firebaseConfig);

// // Obtenerlementos 
// const loginEmail = document.getElementById("loginEmail");
// const loginPassword = document.getElementById("loginPassword");
// const btnLogin = document.getElementById("enter");
// // const btnSignUp = document.getElementById("btnSignUp");
// // const btnLogout = document.getElementById("btnLogout");

// // Añadir Evento login
// btnLogin.addEventListener("click", (e) => {
//   //Obtener email y pass
//   const email = loginEmail.value;
//   const pass = loginPassword.value;
//   const auth = firebase.auth();
//   // Sign in
//   const promise = auth.signInWithEmailAndPassword(email, pass);
//   promise.catch((e) => console.log(e.message));
// });
// // Añadir evento signup 
// //btnSignUp.addEventListener("click", (e) => {
// // Obtener email y pass
// // TODO: corroborar que el email sea real
// const email = loginEmail.value;
// const pass = loginPassword.value;
// const auth = firebase.auth();
// // Sign in
// const promise = auth.createUserWithEmailAndPassword(email, pass);
// promise.catch((e) => console.log(e.message));});

//   // btnLogout.addEventListener("click", (e) => {
//   //   firebase.auth().signOut();
//   // });

//   // Añadir un listener en tiempo real
//   firebase.auth().onAuthStateChanged((firebaseUser) => {
//     if (firebaseUser) {
//       console.log(firebaseUser);
//       btnLogout.classList.remove("hide");
//     } else {
//       console.log("no logueado");
//       btnLogout.classList.add("hide");
//     }
//   });
// }());

// //2 opciones crear  las funciones de firebase aqui o en otro archivo pero usando la inicializacion de firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDP4-xDQtn-5NB8-ICDuVPVNmxzB3WrYcE",
//     authDomain: "red-social--mxchilazo.firebaseapp.com",
//     projectId: "red-social--mxchilazo",
//     storageBucket: "red-social--mxchilazo.appspot.com",
//     messagingSenderId: "905471998919",
//     appId: "1:905471998919:web:5e4ea20b0acc71d53e77e2",
//     measurementId: "G-01G90LYKY6"
//   };
//   firebase.initializeApp(firebaseConfig);


// export function loginGoogle() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then((result) => {
//   console.log(result.user)
// });
// //falta catch y cerrar then
// }
