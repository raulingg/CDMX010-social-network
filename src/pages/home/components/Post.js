export default (post) => `
    <div class="post">
        <p>${post.message}</p>
        <p>${post.user}</p>
        <p>${post.createdAt.toDate()}</p>
    <div>
    <br />
`;
