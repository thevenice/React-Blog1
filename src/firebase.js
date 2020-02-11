import firebase from "firebase/app"
import database from "firebase/database"
const config={
    apiKey: "AIzaSyBF7wJcjHbolsjM79sWsCBuQ8VY2Jk8kck",
    authDomain: "react-blog-19d03.firebaseapp.com",
    databaseURL: "https://react-blog-19d03.firebaseio.com",
    projectId: "react-blog-19d03",
    storageBucket: "react-blog-19d03.appspot.com",
    messagingSenderId: "324684191485",
    appId: "1:324684191485:web:ec84442a9956717d135094"
};
// caches
let firebaseCache;

export const getFirebase=()=>{
    if(firebaseCache){
        return firebaseCache;
    }
    firebase.initializeApp(config);
    // if firebaseCache return it
    // init firebase pass it in firebaseCache
    firebaseCache= firebase;

    // return new firebase
    return firebase;

}