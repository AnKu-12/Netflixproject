
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx2hyG9V9LQ72EvJHwfpkODGKGXpHrHXg",
  authDomain: "react-netflix-clone-f036d.firebaseapp.com",
  projectId: "react-netflix-clone-f036d",
  storageBucket: "react-netflix-clone-f036d.appspot.com",
  messagingSenderId: "75484923534",
  appId: "1:75484923534:web:9515009da93a8e2e402bdf",
  measurementId: "G-PL75WPZ3PV"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);