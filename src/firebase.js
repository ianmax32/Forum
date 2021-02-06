import { config } from '@fortawesome/fontawesome-svg-core';
import firebase from 'firebase';


  var firebaseConfig = {
    apiKey:process.env.API_KEY ,
    authDomain: "ssforum-c1e11.firebaseapp.com",
    projectId: "ssforum-c1e11",
    storageBucket: "ssforum-c1e11.appspot.com",
    messagingSenderId: "333785561091",
    appId: "1:333785561091:web:25680eb142fa8bec96f636"
  };

  const firebaseDB = firebase.initializeApp(firebaseConfig);

  export default firebaseDB;