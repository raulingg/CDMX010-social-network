import {loginTemplate} from "./lib/views/login.js";
import {registerTemplate} from "./lib/views/register.js";
import {homeTemplate} from "./lib/views/home.js";

export const routes = {
    "/":loginTemplate,
    "/register": registerTemplate,  
    "/home" : homeTemplate,    
};

// const rootDiv = document.getElementById("root");
// rootDiv.innerHTML= routes [window.location.pathname];


// export function render (x, y) { 
//     x.addEventListener("click", () => {
//     onNavigate(y);
//     return false;
//     });
// };

export const onNavigate = (pathname) => { 
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    const view = routes[pathname]
    view(rootDiv)
};

window.onpopstate = () => {
    const view= routes[window.location.pathname]
    view(rootDiv)
};