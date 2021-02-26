import home from "./home.js";

export const routes = {
    '/' : home,
  };
  
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];
  
  export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
  }
  
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }
  