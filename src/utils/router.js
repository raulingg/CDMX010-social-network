import { homeController } from '../controllers/homeController.js';
import { comments } from '../components/comments.js';
import { loginController } from '../controllers/loginController.js';

const rootDiv = document.getElementById('root');

export const routes = {
    '/': loginController,
    '/home': homeController,
    // '/comments': comments
};

export const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    const buildController = routes[pathname]
    buildController()
};