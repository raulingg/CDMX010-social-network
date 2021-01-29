const routes = {};
let target;

export const load = (originalTarget, originalRoutes) => {
  target = originalTarget;
  Object.assign(routes, originalRoutes);
};

export const get = (key) => routes[key];

export const render = (key) => {
  const component = get(key);
  // eslint-disable-next-line no-param-reassign
  target.innerHTML = component.render();

  if (typeof component.attachListeners === 'function') {
    component.attachListeners();
  }
};

export const dispatchAndRender = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  render(window.location.pathname);
};
