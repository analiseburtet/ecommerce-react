import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDAnMiheVjvmfNC1X3KKTjnYNRZia-Mgjs",
    authDomain: "crwn-db-9c162.firebaseapp.com",
    databaseURL: "https://crwn-db-9c162.firebaseio.com",
    projectId: "crwn-db-9c162",
    storageBucket: "",
    messagingSenderId: "903387725593",
    appId: "1:903387725593:web:24e1f9b4089bf3981acf88"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;