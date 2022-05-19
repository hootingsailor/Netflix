// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBz-bzhImV2YNbms1vsZy6BpShf6uL95vg",
  authDomain: "netflix-2ec4d.firebaseapp.com",
  projectId: "netflix-2ec4d",
  storageBucket: "netflix-2ec4d.appspot.com",
  messagingSenderId: "181020917217",
  appId: "1:181020917217:web:bcb7f5208c83bbc72ce6a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
