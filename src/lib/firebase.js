export default (firebase) => {
  const createPost = ({ message, user }) => firebase.firestore()
    .collection('posts')
    .add({
      message,
      user,
    })
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
  };
};
