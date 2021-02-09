import firebase from 'firebase/app';
import'firebase/firestore';


  var firebaseConfig = {
    apiKey:process.env.API_KEY ,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;