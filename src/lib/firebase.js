 // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCBbc4-QZcuS9hpij5G3SZUC3PS4yenuvQ",
  authDomain: "encounter-laboratoria2021.firebaseapp.com",
  projectId: "encounter-laboratoria2021",
  storageBucket: "encounter-laboratoria2021.appspot.com",
  messagingSenderId: "577031064049",
  appId: "1:577031064049:web:3b0acf39eaaad6ddbc5c50",
  measurementId: "G-NESVHDG3JE"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function registrar (email, password) {
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ..
  });
};

export function signIn (emailSignIn, passwordSingnIn) {
  firebase.auth().signInWithEmailAndPassword(emailSignIn, passwordSingnIn)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
};

export function observador () {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("usuario activo");
      home(user);
      // let emailVerify = user.emailVerify;
      // User is signed in.
      // let displayName = user.displayName;
      // let email = user.email;
      // console.log(displayName);
      // console.log(email);
    } else {
      console.log("no existe usuario activo");
      // No user is signed in.
    }
  });
};
observador()

function home (user) {
//  let user = user;
 let contenido = document.getElementById("home");
 if (user.emailVerify)
 contenido.innerHTML = `
 <p>Bienvenida</p>
 <button>Cerrar sesión</button>
 ` 
};

function verificar () {
  let user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  console.log("enviando correo");
}).catch(function(error) {
  // An error happened.
  console.log(error);
});
};
console.log(verificar);
// export function registrar (){
//       let email = document.getElementById("email").value;
//       let password = document.getElementById("password").value;
//       console.log(email);
//       console.log(password);
//   return
// };



// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((user) => {
//     // Signed in
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

 

// aqui exportaras las funciones que necesites
/*
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
*/