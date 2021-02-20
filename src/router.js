import { home } from './home.js';
import { singUp } from './singUp.js';
import { logIn } from './login.js';
import { post } from './post.js';
import { logOut } from './logOut.js';

//Objeto que contiene los pathnames de las secciones
const rootDiv = document.getElementById('root');

export const routes = {
    '/home': home,
    '/singup': singUp,
    '/login': logIn,
    '/post': post,
    '/logout': logOut,
};

//Evento click que define el pathname donde se renderizará //
export function forRouter(linkId,PathName) {
    linkId.addEventListener('click', () => {
        onNavigate(PathName); return false;
    })
    }
//Función que renderiza el pathname 
export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML=routes[pathname];
    if (pathname=='/home') {
        console.log('This is Home');
    } else if (pathname=='/singup') {
        console.log('This is Sing Up');
    } else if (pathname=='/login') {
        console.log('This is Log In');
    } else if(pathname=='/post') {
        console.log('This is post');       
    } else if (pathname=='/logout') {
        console.log('This is Log Out');
    }
    // const buildController = routes[pathname]
    // buildController()
};

