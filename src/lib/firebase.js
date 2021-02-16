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





firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

 

// aqui exportaras las funciones que necesites
/*
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
*/