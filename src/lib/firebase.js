import { onNavigate } from '../router.js';

var firebaseConfig = {
    apiKey: "AIzaSyCMoOe0AXVQgK3goG6Nd_gb68S7Rjak7w8",
    authDomain: "i-care-4b791.firebaseapp.com",
    projectId: "i-care-4b791",
    storageBucket: "i-care-4b791.appspot.com",
    messagingSenderId: "1028505964973",
    appId: "1:1028505964973:web:643e593fefcb51781f9124"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //Enviamos datos para validarlos 
  const auth = firebase.auth();   
  const fs = firebase.firestore();


//Crear Usuario

export const createAccount = (singUpName,singUpEmail,singUpPassword)=>{

   firebase.auth().createUserWithEmailAndPassword(singUpEmail,singUpPassword)
    .then((result) => {
      firebase.auth().signOut(); 
      inLogOut(onNavigate('/'));
      alert('Ve a tu correo electronico y verifica tu cuenta para poder ingresar');
      result.user.updateProfile({
        displayName: singUpName
      })

      const configuracion = { //Redirije al usuario después de verificar su email
        url: 'http://localhost:5000'
      }
      result.user.sendEmailVerification(configuracion) //Enviar correo al usuario para verficar su email
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })

      firebase.auth().signOut(); 

    })
    .catch((error) => {

      if(name === '' || email === '' || password ==='')
      {
        const errorMessage = error.message;
        alert('Llena todos los campos para completar tu registro', errorMessage);
      }
      else{
      const errorCode = error.code;
      alert('Usuario ya existente, intente con otro', errorCode);
      }
    })
};
      
//Iniciar sesion
export const inLogIn = (logInEmail,logInPassword) => {
   firebase.auth().signInWithEmailAndPassword(logInEmail,logInPassword)
   .then((userCredential) => {
     onNavigate('/login');   
   })
   .catch((error) => {
     alert('Ingresa tus datos para poder iniciar sesión', error);
   })
   };
//Log Out
// const toLogOut = document.querySelector('#logout');
// toLogOut.addEventListener('click', e =>{
//    e.preventDefault();
//    auth.signOut().then(() => {
//       console.log('Cerraste Sesión')
//    })
// });
export const inLogOut = () =>{
   firebase.auth().signOut()
   .then((user) =>{
     alert('Cerraste sesión correctamente');
   })
   .catch((error) => {
     console.log('Error al cerrar sesión');
   })
 }
//Acceso con Google
export const toLogGoogle = () => {
   const provider = new firebase.auth.GoogleAuthProvider(); //en esta linea se pone el provedor de autenticacion//
   firebase.auth().signInWithPopup(provider)
   .then((result) => {
     onNavigate('/singUp');
     /** @type {firebase.auth.OAuthCredential} */
     var credential = result.credential;
     var token = credential.accessToken;
     var user = result.user;
     console.log("Acceso correcto");
   })
   .catch((error) => {
     
     var errorCode = error.code;
     var errorMessage = error.message;
     var email = error.email;
     var credential = error.credential;
     console.log("Error");
   });
 }

//Acceso con Facebook 

export const toLogFacebook = () => {
   const provider = new firebase.auth.FacebookAuthProvider(); 
 
   firebase.auth().signInWithPopup(provider)
   .then((result) => {
     onNavigate('/singUp');
     /** @type {firebase.auth.OAuthCredential} */
     var credential = result.credential;
     var user = result.user;
     var accessToken = credential.accessToken;
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
     var email = error.email;
     var credential = error.credential;
   });
 };


//Post
const postList = document.querySelector('#myPost');
const setUpPost = data => {
   if(data.length) {
      let html = '';
      data.forEach(doc =>{
         const post = doc.data()
         console.log(post)
         const li = `
           <li class="item" >
             <h5>${post.title}</h5>
             <p>${post.description}</p>
           </li>
           `;
           html += li;
      });
      postList.innerHTML = html;
   } else {
      postList.innerHTML=' <p>Inicia sesión para ver las publicaciones</p>'
   }
}

//Eventos
//Revisa el estatus de Auth

firebase.auth().onAuthStateChanged(user => {
   if(user) {
      // console.log('Hay sesión iniciada')
      fs.collection('post')
         .get()
         .then((snapshot) => {
            // console.log(snapshot.docs)
            setUpPost(snapshot.docs)
         })
   } else {
      // console.log('No hay sesión iniciada')
      setUpPost([])
   }
})
