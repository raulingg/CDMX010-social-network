export default (firebase) => {
  const getPosts = async ({
    limit = 5, lastVisible = 0, orderBy = 'createdAt', sort = 'desc',
  } = {}) => {
    const ref = firebase.firestore().collection('posts').orderBy(orderBy, sort);

    let querySnap;
    if (lastVisible) {
      querySnap = await ref.startAfter(lastVisible).limit(limit).get();
    } else {
      querySnap = await ref.limit(limit).get();
    }

    const posts = [];
    querySnap.forEach((doc) => {
      const post = doc.data();
      posts.push({
        ...post,
        createdAt: post.createdAt.toDate(),
      });
    });

    return {
      posts,
      lastVisible: querySnap.docs[querySnap.docs.length - 1],
      hasMore: posts.length === limit,
    };
  };

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
