// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPVz4b68UTlrPMuQqMqPuhILkk3qVosUs",
  authDomain: "la-tienda-de-vallosti.firebaseapp.com",
  projectId: "la-tienda-de-vallosti",
  storageBucket: "la-tienda-de-vallosti.appspot.com",
  messagingSenderId: "1052989597550",
  appId: "1:1052989597550:web:3efa838a927531a1ce437f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp=() =>{
    return app
}