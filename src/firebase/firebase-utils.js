import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyB7uamxk8mlUUm4aSs5VztQOk4odASwtuI",
    authDomain: "simpl-clothing-db.firebaseapp.com",
    databaseURL: "https://simpl-clothing-db.firebaseio.com",
    projectId: "simpl-clothing-db",
    storageBucket: "simpl-clothing-db.appspot.com",
    messagingSenderId: "262124529275",
    appId: "1:262124529275:web:70aaa3f17cc944575be4de",
    // measurementId: "G-4CKVVWQVFS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;