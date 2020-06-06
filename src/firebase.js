import * as firebase from "firebase/app"
import "firebase/database"
import "firebase/storage"
import "firebase/auth"



var firebaseConfig = {
   apiKey: "AIzaSyAqmImx0_DoPFkX0q5adbsa22l0GIQo9Ps",
   authDomain: "legume-de-belint.firebaseapp.com",
   databaseURL: "https://legume-de-belint.firebaseio.com",
   projectId: "legume-de-belint",
   storageBucket: "legume-de-belint.appspot.com",
   messagingSenderId: "191749701873",
   appId: "1:191749701873:web:587fcc6a45917ea0476950",
   measurementId: "G-37J33FSQ5S"
   };

firebase.initializeApp(firebaseConfig);

export default firebase