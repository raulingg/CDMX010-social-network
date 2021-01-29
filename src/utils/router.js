import { home } from '../home.js';
import { comments } from '../comments.js';
import { loginComponent } from '../login.js';

const rootDiv = document.getElementById('root');

export const routes = {
    '/': loginComponent,
    '/home': home,
    '/comments': comments
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    const buildView = routes[pathname]
    rootDiv.innerHTML = buildView()
};