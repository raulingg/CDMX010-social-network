// 2 opciones crear  las funciones de firebase aqui o en otro archivo pero usando la
// inicializacion de firebase

const firebaseConfig = {
  apiKey: 'AIzaSyDP4-xDQtn-5NB8-ICDuVPVNmxzB3WrYcE',
  authDomain: 'red-social--mxchilazo.firebaseapp.com',
  projectId: 'red-social--mxchilazo',
  storageBucket: 'red-social--mxchilazo.appspot.com',
  messagingSenderId: '905471998919',
  appId: '1:905471998919:web:eed9430c0611304c3e77e2',
  measurementId: 'G-VM890W7PCY',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// export function loginGoogle() {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then((result) => {
//   console.log(result.user)
// });
// //falta catch y cerrar then
// };
export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};
// mich
// btnLogin.addEventListener("click", (e) => {
//     //Obtener email y pass
//     const email = loginEmail.value;
//     const pass = loginPassword.value;
//     const auth = firebase.auth();

// comenzar firebase registra nuevos usuarios
export const newUserAccount = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });
};

// usuarios existentes
export const loginUser = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log(user);
      // Signed in
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
};
