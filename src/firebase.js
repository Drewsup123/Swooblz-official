import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyAFr2GbPXDA4Eo9So_xEa4EOP4PANZsHY0",
  authDomain: "swooblz.firebaseapp.com",
  databaseURL: "https://swooblz.firebaseio.com",
  projectId: "swooblz",
  storageBucket: "swooblz.appspot.com",
  messagingSenderId: "370329610912"
};
firebase.initializeApp(config);

export default firebase;
