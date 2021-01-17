import firebase from "firebase"

const config = {
    apiKey: "AIzaSyBzomlUxgKyMMmxljimlkyRUt_RiSQ-zMI",
    authDomain: "htn2020-a7cfc.firebaseapp.com",
    databaseURL: "https://htn2020-a7cfc-default-rtdb.firebaseio.com",
    projectId: "htn2020-a7cfc",
    storageBucket: "htn2020-a7cfc.appspot.com",
    messagingSenderId: "1090281374340",
    appId: "1:1090281374340:web:6c21b084f22fe5f53c38d1",
    measurementId: "G-02G10RSQ7E"
};

const app = firebase.initializeApp(config)
export default app;

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export const logOut = () => {
    auth.signOut().then(()=> {
      console.log('logged out')
    }).catch((error) => {
      console.log(error.message)
    })
  }