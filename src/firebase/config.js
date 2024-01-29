import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFTpyFy4wQQ30zbxs7vhBNCYFWEZeWU50",
  authDomain: "recipe-site-e43b7.firebaseapp.com",
  projectId: "recipe-site-e43b7",
  storageBucket: "recipe-site-e43b7.appspot.com",
  messagingSenderId: "348428136588",
  appId: "1:348428136588:web:17c1a9e851de36a81f8ba9",
};

firebase.initializeApp(firebaseConfig);
const projFirestore = firebase.firestore();
export { projFirestore };
