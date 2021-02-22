export default (firebase) => {
  const list = async ({
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
        id: doc.id,
        createdAt: post.createdAt.toDate(),
        updatedAt: post.updatedAt?.toDate(),
      });
    });

    return {
      posts,
      lastVisible: querySnap.docs[querySnap.docs.length - 1],
      hasMore: posts.length === limit,
    };
  };

  const create = ({ message, user }) => firebase.firestore()
    .collection('posts')
    .add({ message, user, createdAt: new Date() })
    .then((docRef) => docRef.id)
    .catch((error) => console.error('Error adding document: ', error));

  const update = (id, { message, updatedAt }) => firebase.firestore()
    .doc(`posts/${id}`)
    .update({ message, updatedAt })
    .catch((error) => console.error('Error updating the document: ', error));

  const remove = (id) => firebase.firestore()
    .doc(`posts/${id}`)
    .delete()
    .then(() => console.log('Document deleted'))
    .catch((error) => console.error('Error deleting document: ', error));

  const signIn = (email, password) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => console.log('user has signed in!', user));

  const signOut = () => firebase.auth().signOut();

  const getUser = () => firebase.auth().currentUser;

  return {
    auth: {
      signIn,
      signOut,
      getUser,
    },
    post: {
      create,
      list,
      update,
      remove,
    },
  };
};
