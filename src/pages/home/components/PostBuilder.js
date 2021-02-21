export default () => `
  <form id="postBuilderForm">
    <textarea name="message" id="message" rows="4" cols="50" autofocus></textarea>
    <input type="submit" value="Post">
  </form>
  <p id="feedbackMessage" hidden>Message sent successfully!</p>
`;
