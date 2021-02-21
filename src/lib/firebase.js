 // aqui exportaras las funciones que necesites
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

export function registration(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verify ()
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
  
  export function observer () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("usuario activo");
        home(user);
        console.log(user);
        let emailVerified = user.emailVerified;

        console.log(user.emailVerified);
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
  observer()

  
    // Esta función debe ir en login.js (manipula DOM)
  function home (user) {
   //let user = user;
   let contenido = document.getElementById("home");
   if (user.emailVerified){ 
   contenido.innerHTML = `
   <p>Inicio de sesión</p>
   <button>Cerrar sesión</button>
   `
   }; 
  };
  
  function verify () {
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
    // Email sent.
    console.log("enviando correo");
  }).catch(function(error) {
    // An error happened.
    console.log(error);
  });
  };
  
/*
export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
*/






/*
EXPERIMENTO 01

export function createPost(post){
  let {title, paragraph} = post;
  let createPost =`
      <div class="content">
          <h5>${title}</h5>
          <p>${paragraph}</p>
          <button>Cerrar sesión</button>
       `;
   return createPost;
  // if (user.emailVerified){ 
  //    contenido.innerHTML = `
  //    <p>Bienvenida</p>
  //    <button>Cerrar sesión</button>
  //     `
  //     };}
};

function setPost(settingContent){
  let postContainer = document.getElementById("home");
  contenido.addEventListener("click", () =>{
      if (user.emailVerified){  
          let emptyContent = '';
          settingContent.
      }
}
*/