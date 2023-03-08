import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBwZg0EfA_SfiLU6GB36-KDLwU_bFXCa3o",
  authDomain: "srinidhivs-portfolio.firebaseapp.com",
  projectId: "srinidhivs-portfolio",
  storageBucket: "srinidhivs-portfolio.appspot.com",
  messagingSenderId: "316121201196",
  appId: "1:316121201196:web:d7c6a9c40025f039c7af89"
};

export const app = initializeApp(firebaseConfig); 

export const db = getFirestore()