// llamar a Firestore
export const dataBase = firebase.firestore(); 

export const savePost = (title, location, description) =>
  dataBase.collection('post').doc().set({
    title,
    location,
    description,
  });

// de la colección quiero un documento con el id que se obtiene al dar click
export const getPostInfo = (id) => dataBase.collection('post').doc(id).get();
export const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
  // para eliminar un post da un parametro id
export const deletePost = id => dataBase.collection('post').doc(id).delete();
  // función actuaalizar en firebase

export const updatePost = (id, updatedPost) =>
  dataBase.collection('post').doc(id).update(updatedPost);
