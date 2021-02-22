export default () => `
  <form id="postBuilderForm" data-testid="postBuilderForm">
    <textarea name="postBuilderInput" rows="4" cols="50" autofocus data-testid="postBuilderInput"></textarea>
    <input type="submit" value="Post" data-testid="postBuilderButton">
  </form>
  <p id="feedbackMessage" data-testid="feedbackMessage" hidden>Message sent successfully!</p>
`;
