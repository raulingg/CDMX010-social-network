import { home } from './home.js';
import { logIn } from './login.js';
import { post } from './post.js';

//Objeto que contiene los pathnames de las secciones
const rootDiv = document.getElementById('root');

export const routes = {
    '/home': home,
    '/login': logIn,
    '/post': post,
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
    } else if (pathname=='/login') {
        console.log('This is Log In');
    } else if(pathname=='/post') {
        console.log('This is post');       
    }
    // const buildController = routes[pathname]
    // buildController()
};

