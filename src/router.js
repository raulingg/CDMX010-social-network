const props = {
  routes: {},
  target: null,
  dependencies: {},
};

export const load = (originalProps) => Object.assign(props, originalProps);

export const dispatch = (key) => {
  const controller = props.routes[key];
  controller(props.target, props.dependencies);
};

export const goTo = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  dispatch(window.location.pathname);
};
