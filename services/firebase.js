import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCmqgzJbmmdFMKkofQrjP7M4ZuLhiPptOw",
    authDomain: "blogstore-99e7f.firebaseapp.com",
    projectId: "blogstore-99e7f",
    storageBucket: "blogstore-99e7f.appspot.com",
    messagingSenderId: "661336382556",
    appId: "1:661336382556:web:e66a298da99c8828e51a99",
    measurementId: "G-H4JZM104XF"
};

let app = null
if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
}

export default firebase