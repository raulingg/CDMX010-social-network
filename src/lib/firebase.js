import { lugares } from "../main.js";

const firebaseConfig = {
  apiKey: "AIzaSyDP4-xDQtn-5NB8-ICDuVPVNmxzB3WrYcE",
  authDomain: "red-social--mxchilazo.firebaseapp.com",
  projectId: "red-social--mxchilazo",
  storageBucket: "red-social--mxchilazo.appspot.com",
  messagingSenderId: "905471998919",
  appId: "1:905471998919:web:eed9430c0611304c3e77e2",
  measurementId: "G-VM890W7PCY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// escribir datos
function saveData(user) {
  const usuario = {
    uid: user.user.uid,
    email: user.user.email,
  };
  db.collection("users")
    .doc()
    .set(usuario)
    .then(() => {
      console.log("Document successfully written!");
    });
}

// comenzar firebase registra nuevos usuarios
export const newUserAccount = (email, password, onNavigate, rootDiv) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...
      saveData(user);
      const navigate = onNavigate("/mxchilazo");
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
      const navigate = onNavigate("/mxchilazo");
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
      const navigate = onNavigate("/mxchilazo");
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
      const navigate = onNavigate("/mxchilazo");
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

/* funciona! escribir en la base de datos
export const createUser = async (email, password) => {
  await db.collection('users').doc().set({
    email,
    password,
  });
}; */

// ejemplo promesa
// export const getPost = () => db.collection('reviews').get();

// escribir datos del post a db
export const buildReview = async (name, post) => {
  await db
    .collection("reviews")
    .doc()
    .set({ name, post })
    .then(() => {
      console.log("Document successfully written!");
    });
};

// const getReview = () => db.collection("reviews").get();

// leer datos “get” para recuperar toda la colección. llevar a main?
export const getCollectonReview = () => {
  db.collection("reviews")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    });
};

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(${doc.id} => ${doc.data()});
//   });
// });
