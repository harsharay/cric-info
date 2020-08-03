import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyAAvuA7BTJRVFRym3cRHHzwfPIM3NaCTP0",
    authDomain: "crwn-db-b2bb7.firebaseapp.com",
    databaseURL: "https://crwn-db-b2bb7.firebaseio.com",
    projectId: "crwn-db-b2bb7",
    storageBucket: "crwn-db-b2bb7.appspot.com",
    messagingSenderId: "281711477222",
    appId: "1:281711477222:web:7f1a80f4d9c5158ff89627"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// firestore.collection('playersData').get().forEach(item => item.data())