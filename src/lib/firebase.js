// llamar a Firestore
export const dataBase = firebase.firestore();

export const savePost = ({ title, location, description, likes }) =>
  dataBase.collection('post').doc().set({
    title,
    location,
    description,
    likes,
  });

// de la colección quiero un documento con el id que se obtiene al dar click
export const getAllPosts = async (id) => {
  const querySnapshot = await dataBase.collection('post').get();
  const posts = [];
  querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      posts.push(post);      
  });

  return posts
};

export const getPostById = async (id) => {
  const doc = await  dataBase.collection('post').doc(id).get();

  return doc.data();
}

export const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
// para eliminar un post da un parametro id
export const deletePost = (id) => dataBase.collection('post').doc(id).delete();
// función actuaalizar en firebase

export const updatePost = (id, updatedPost) => dataBase.collection('post').doc(id).update(updatedPost);
