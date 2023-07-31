import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkX488iXRTBmcv61Dx7kAX1ZKj46Ckljs",
  authDomain: "fir-user-auth108.firebaseapp.com",
  projectId: "fir-user-auth108",
  storageBucket: "fir-user-auth108.appspot.com",
  messagingSenderId: "898473055782",
  appId: "1:898473055782:web:d9fe8755cd2a651082b8e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);