// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA9U395ckv4Vl6rIS_1HZxszNg-I-xEcVM',
  authDomain: "lech-store-43af0.firebaseapp.com",
  projectId: "lech-store-43af0",
  storageBucket: "lech-store-43af0.appspot.com",
  messagingSenderId: "491982028714",
  appId: "1:491982028714:web:06c95004c12f0c73b135d3",
  measurementId: "G-Y7BKQ5MJV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const auth = getAuth()
export const register = async (email, password,name) => {
  try{

    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    updateProfile(auth.currentUser,{
      displayName:name
    })
    return user
  }catch(err){
    return err.message
  }
}

export {
    db,
    app
}