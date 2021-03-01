import { toViewHome } from './components/home.js';
import { toViewSingUp } from './components/singUp.js';
import { toViewLogIn } from './components/login.js';
import { toViewPost } from './components/post.js';
import { toViewLogOut } from './components/logOut.js';

//Objeto que contiene los pathnames de las secciones
const rootDiv = document.getElementById('root');

export const routes = {
    '/': toViewHome,
    '/singup': toViewSingUp,
    '/login': toViewLogIn,
    '/post': toViewPost,
    '/logout': toViewLogOut,
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
    // const buildController = routes[pathname]
    // buildController()
};

