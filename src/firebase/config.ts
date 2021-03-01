
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCznmXSxcEZHjxv31Sysk_GvySiD7Zx8Lw",
    authDomain: "proyecto-luisangel.firebaseapp.com",
    databaseURL: "https://proyecto-luisangel-default-rtdb.firebaseio.com",
    projectId: "proyecto-luisangel",
    storageBucket: "proyecto-luisangel.appspot.com",
    messagingSenderId: "106755429454",
    appId: "1:106755429454:web:020262a55b952971a3df1f",
    measurementId: "G-KC1FP2N10H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();