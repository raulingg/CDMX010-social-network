// Este es el punto de entrada de tu aplicacion
import {forRouter, onNavigate } from "./router.js";

//Renderiza por default
// let currentPathname = window.location.pathname;
// onNavigate(currentPathname);

//Enlaces para acceder a las secciones
const homeLink = document.getElementById('home');
const singUpLink = document.getElementById('singUp');
const loginLink = document.getElementById('login');
const postLink = document.getElementById('post');
const logOutLink = document.getElementById('logout');


//Funciones que renderizan cada sección
forRouter(homeLink, '/home');
forRouter(singUpLink, '/singup');
forRouter(loginLink, '/login');
forRouter(postLink, '/post');
forRouter(logOutLink, '/logout');

//Crear Usuario
const singUpForm = document.querySelector('#singUp-form');

singUpForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const singUpEmail = document.querySelector('#signUp-email').value;
    const singUpPassword = document.querySelector('#signUp-password').value;
    console.log(singUpEmail, singUpPassword);

    auth
         .createUserWithEmailAndPassword(singUpEmail,singUpPassword)
         .then(userCredential => {

            //Limpiar el formulario
            singUpForm.reset();
            //Cerrar el formulario
            singUpForm.style.display="none";
            console.log('Creo cuenta'); 
         })
});

//Iniciar Sesión

const singInForm = document.querySelector('#logIn-form');

singInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const logInEmail = document.querySelector('#logIn-email').value;
    const logInPassword = document.querySelector('#logIn-password').value;
    console.log(logInEmail, logInPassword);

    auth
         .signInWithEmailAndPassword(logInEmail,logInPassword)
         .then(userCredential => {

            //Limpiar el formulario
            singUpForm.reset();
            //Cerrar el formulario
            singUpForm.style.display="none";
            console.log('Inicio sesión'); 
         })
});
//Log Out
const toLogOut = document.querySelector('#logout');

toLogOut.addEventListener('click', e =>{
   e.preventDefault();
   auth.signOut().then(() => {
      console.log('Cerraste Sesión')
   })

});
//Acceso con Google
const googleButton = document.querySelector('#googleAccess');
googleButton.addEventListener('click', e => {
   // e.preventDefault();
   //  console.log('Jala botón Google')
   const provider = new firebase.auth.GoogleAuthProvider();
   auth.signInWithPopup(provider)
        .then(result => {
         // console.log(result);
           console.log("se ha iniciado sesión con google")
        })
         .catch(err => {
            console.log(err)
         })
} )

//Acceso con Facebook 
const facebookButton = document.querySelector('#facebookAccess');
facebookButton.addEventListener('click', e => {
   // e.preventDefault();
   //  console.log('Jala botón Facebook')
   const provider = new firebase.auth.FacebookAuthProvider();
   auth.signInWithPopup(provider)
        .then(result => {
           console.log(result);
           console.log("se ha iniciado sesión con facebook ")
        })
         .catch(err => {
            console.log(err)
         })
} )


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

auth.onAuthStateChanged(user => {
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

