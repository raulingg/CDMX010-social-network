// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfw4xz2PjGD2eXmt6ObeiHMJFyeWAPAxo",
  authDomain: "red-social-6d454.firebaseapp.com",
  projectId: "red-social-6d454",
  storageBucket: "red-social-6d454.appspot.com",
  messagingSenderId: "850467784868",
  appId: "1:850467784868:web:4c3852e2c8d87d26a0be31",
  measurementId: "G-YDWYMYLJ5L"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// llamar a Firestore
const dataBase = firebase.firestore();

export const savePost = (title, location, description, likes) =>
  dataBase.collection('post').doc().set({
    title,
    location,
    description,
    likes,
  });

// de la colección quiero un documento con el id que se obtiene al dar click
export const getPostInfo = (id) => dataBase.collection('post').doc(id).get();
export const onGetPost = (callback) => dataBase.collection('post').onSnapshot(callback);
// para eliminar un post da un parametro id
export const deletePost = (id) => dataBase.collection('post').doc(id).delete();
// función actuaalizar en firebase

export const updatePost = (id, updatedPost) => dataBase.collection('post').doc(id).update(updatedPost);

export const getPosts = () => {
  return dataBase.collection('post').get()
    .then(function(querySnapshot) {
      let docs = [];
      querySnapshot.forEach(function(doc) {
        docs.push(doc.data());
      });
      console.log(docs);
      return docs;
    })
};

export const traedatos = () => {
  onGetPost((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      const post = doc.data();
      console.log(post);
      return post;
    });
  });
};
