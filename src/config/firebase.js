

import firebase from "firebase"
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyA-K3mIH5ZYp6YY33C0315v0P8p1OkepgA",
    authDomain: "lista-amigos.firebaseapp.com",
    projectId: "lista-amigos",
    storageBucket: "lista-amigos.appspot.com",
    messagingSenderId: "519508817990",
    appId: "1:519508817990:web:fb8378e7deef9240feb247"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase