import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
  apiKey: 'AIzaSyA0qWg6HpBVKxdGb7yXuywJVguHhHdUQJs',
  authDomain: 'crwn-db-1e4b5.firebaseapp.com',
  projectId: 'crwn-db-1e4b5',
  storageBucket: 'crwn-db-1e4b5.appspot.com',
  messagingSenderId: '245327449748',
  appId: '1:245327449748:web:8154ea8149b58221c8ae81',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
