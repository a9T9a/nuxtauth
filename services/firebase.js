import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    
};

let app = null
if(!firebase.apps.length){
    app = firebase.initializeApp(firebaseConfig)
}

export default firebase