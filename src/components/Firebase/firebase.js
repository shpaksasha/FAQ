import firebase from 'firebase/app';
import 'firebase/firestore';

    const firebaseConfig = {
    apiKey: "AIzaSyBbyVu205ewsu868Y7UpULNG8yAbZKEZ2g",
    authDomain: "faq-test-1eace.firebaseapp.com",
    databaseURL: "https://faq-test-1eace.firebaseio.com",
    projectId: "faq-test-1eace",
    storageBucket: "faq-test-1eace.appspot.com",
    messagingSenderId: "1023951483108",
    appId: "1:1023951483108:web:d209fe1a305f39be1bbcf1"
};

    firebase.initializeApp(firebaseConfig);

    export default firebase;