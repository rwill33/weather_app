import firebase from "firebase/compat";

// import firebase from 'firebase/app';
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4X6fvfGAk1C700joW7xFmMx-H91GtRn0",
    authDomain: "weatherapp-72228.firebaseapp.com",
    projectId: "weatherapp-72228",
    storageBucket: "weatherapp-72228.appspot.com",
    messagingSenderId: "269157886402",
    appId: "1:269157886402:web:25eb153adeb7fbfaf90e5b"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();

