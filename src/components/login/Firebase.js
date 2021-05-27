import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBB330GWRCyIy4cRvEpBGCY9kaeGZu2v0c",
    authDomain: "login-6b66c.firebaseapp.com",
    projectId: "login-6b66c",
    storageBucket: "login-6b66c.appspot.com",
    messagingSenderId: "866897382791",
    appId: "1:866897382791:web:b7eb13e2347ac213b69722"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;