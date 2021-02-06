/* eslint-disable no-unused-expressions */
export const addGlobalEventListener = ({ event, selector, callback }) => {
  document.addEventListener(event, (e) => {
    if (e.target.matches(selector)) callback(e);
  });
};
