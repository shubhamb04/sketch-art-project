import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDR3cPrb5_8vqpfTgBeq9fKWwt807R4ESc",
  authDomain: "sketch-app-6e3fe.firebaseapp.com",
  databaseURL: "https://sketch-app-6e3fe.firebaseio.com",
  projectId: "sketch-app-6e3fe",
  storageBucket: "sketch-app-6e3fe.appspot.com",
  messagingSenderId: "533992435914",
  appId: "1:533992435914:web:2cc256748ff93838e78433",
  measurementId: "G-0QW8FDMYD9",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timeStamp };
