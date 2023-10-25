
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBd_xJY4_bniURvTPMBDjHY0Y8FMAnanj4",
    authDomain: "calorie-tracker-d6d1b.firebaseapp.com",
    projectId: "calorie-tracker-d6d1b",
    storageBucket: "calorie-tracker-d6d1b.appspot.com",
    messagingSenderId: "882985077328",
    appId: "1:882985077328:web:6b49ccbbc32598536f9f55",
    measurementId: "G-YT2R46S25N"
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth =getAuth(app);
  export const googleProvider= new GoogleAuthProvider();