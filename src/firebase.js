import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCr_JXgHb_HfpOg8ivWjTsUsVSoADOi2nw",
    authDomain: "case-study-24c4a.firebaseapp.com",
    databaseURL: "https://case-study-24c4a.firebaseio.com",
    projectId: "case-study-24c4a",
    storageBucket: "case-study-24c4a.appspot.com",
    messagingSenderId: "895507692038",
    appId: "1:895507692038:web:cac6937f34868a072da187",
    measurementId: "G-LFX4X15S0Y"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();
