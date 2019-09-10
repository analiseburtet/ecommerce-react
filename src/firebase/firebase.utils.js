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

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if (!userAuth)return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;