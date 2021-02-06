import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAA_qQe3JvOYn8ykyPevOdi0Pf8_jnfmsc",
    authDomain: "ssforum-6d8c6.firebaseapp.com",
    projectId: "ssforum-6d8c6",
    storageBucket: "ssforum-6d8c6.appspot.com",
    messagingSenderId: "703854621912",
    appId: "1:703854621912:web:b5ec664a815b08f4dcd3ad"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);

  export default firebaseDB;