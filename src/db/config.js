// firebase configuration
import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBhnyZqnMwPMqus_NzZ8ksnJmMyet2taFU",
    authDomain: "photowall-6782d.firebaseapp.com",
    databaseURL: "https://photowall-6782d-default-rtdb.firebaseio.com",
    projectId: "photowall-6782d",
    storageBucket: "photowall-6782d.appspot.com",
    messagingSenderId: "1082892126391",
    appId: "1:1082892126391:web:c2769e68bd939d73672532"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database()

  export {database}