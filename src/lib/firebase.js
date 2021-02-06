export default (firebase) => {
  const getPosts = ({
    limit = 20, orderBy = 'createdAt', sort = 'desc',
  } = {}) => firebase.firestore().collection('posts')
    .orderBy(orderBy, sort)
    .limit(limit)
    .get()
    .then((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => posts.push(doc.data()));

      return posts;
    });

  const createPost = ({ message, user, createdAt }) => firebase.firestore()
    .collection('posts')
    .add({ message, user, createdAt })
    .then((docRef) => console.log('Document written with ID: ', docRef.id))
    .catch((error) => console.error('Error adding document: ', error));

  const signIn = (email, password) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log('user has signed in!', user));

  const signOut = () => firebase.auth().signOut();

  const getUser = () => firebase.auth().currentUser;

  return {
    createPost,
    signIn,
    signOut,
    getUser,
    getPosts,
  };
};
