import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCp_iPKkSww-O7h84ZBLjUC4iW-Z9ybnxY",
    authDomain: "twitter-6913d.firebaseapp.com",
    projectId: "twitter-6913d",
    storageBucket: "twitter-6913d.appspot.com",
    messagingSenderId: "77852159592",
    appId: "1:77852159592:web:ab0028038c7221b13e95dd"
  };

  firebase.initializeApp(firebaseConfig);

  export const authService = firebase.auth();