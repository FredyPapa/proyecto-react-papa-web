import firebase from 'firebase/app';
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDxpCCe5tTHJTwcvc4uKOOUQYf2vw_dtpw",
    authDomain: "papa-web-store.firebaseapp.com",
    projectId: "papa-web-store",
    storageBucket: "papa-web-store.appspot.com",
    messagingSenderId: "871004918799",
    appId: "1:871004918799:web:f6b469a71253fcabb5ff7a"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);