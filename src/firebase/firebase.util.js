import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config={
    apiKey: "AIzaSyBxLGqJLt9iLAsekvXZhW6LaqTqUd05rvM",
    authDomain: "crwn-db-bdbe6.firebaseapp.com",
    projectId: "crwn-db-bdbe6",
    storageBucket: "crwn-db-bdbe6.appspot.com",
    messagingSenderId: "42184235972",
    appId: "1:42184235972:web:b7f0764aec58957919e291"
}
 firebase.initializeApp(config);
 export const auth=firebase.auth();
 export const firestore=firebase.firestore();
 const provider=new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  export default firebase;