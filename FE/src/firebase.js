import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBVmhjWpl-h8rw0e0gidVjxji4Zen7U0eQ",
    authDomain: "lab6-31528.firebaseapp.com",
    projectId: "lab6-31528",
    storageBucket: "lab6-31528.appspot.com",
    messagingSenderId: "1072453737821",
    appId: "1:1072453737821:web:59774232e10b5b6c03dcb4",
    measurementId: "G-WWCHWV5E7Q"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage };