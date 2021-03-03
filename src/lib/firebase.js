import { lugares } from '../main.js';

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
const db = firebase.firestore();

// comenzar firebase registra nuevos usuarios
export const newUserAccount = (email, password, onNavigate, rootDiv) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
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
export const loginUser = (email, password, onNavigate, rootDiv) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((user) => {
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
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

// autentificacion google
export const googleAuth = (onNavigate, rootDiv) => {
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
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
      console.log(result);
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

// autentificacion facebook
export const facebookAuth = (onNavigate, rootDiv) => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const accessToken = credential.accessToken;
      // ...
      const navigate = onNavigate('/mxchilazo');
      rootDiv.innerHTML = navigate;
      lugares();
      console.log(result);
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

export const createUser = (email, password) => {
  // Add a new document in collection "cities"
  db.collection("users")
    .doc()
    .set({
      email,
      password,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
};
