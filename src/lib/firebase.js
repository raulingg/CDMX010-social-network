const firebaseConfig = {
    apiKey: "AIzaSyAxKjqTudxBWi9j9i4IDKn450hmM1m_w3A",
    authDomain: "red-social-coaches.firebaseapp.com",
    projectId: "red-social-coaches",
    storageBucket: "red-social-coaches.appspot.com",
    messagingSenderId: "489293961166",
    appId: "1:489293961166:web:e0ae10e7b6db857d26fd9f"
};
firebase.initializeApp(firebaseConfig);

let database = firebase.firestore();
export let auth = firebase.auth();

export const createPosts = ({message, user}) => {
    database.collection("posts").add({
      message,
      user
    })
    .then(docRef => console.log("Document written with ID: ", docRef.id))
    .catch(error => console.error("Error adding document: ", error));
};

export const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then((user) => console.log('sign in', user))
  .catch((error) => console.log('error', error)); 
};

