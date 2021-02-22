export default ({ id, message } = {}) => `
  <form data-id="${id || ''}">
    <textarea name="message" rows="4" cols="50" autofocus data-behavior="onEnableUpdateButton">${message || ''}</textarea>
    <button data-behavior="onUpdatePost" disabled>Edit</button>
    <button data-behavior="onCancel">Cancel</button>
  </form>
`;
