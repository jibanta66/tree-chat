import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD6xaFGK3JQT4_98IcaGluyqvZSWmF2rpE",
    authDomain: "thechat-57df8.firebaseapp.com",
    projectId: "thechat-57df8",
    storageBucket: "thechat-57df8.appspot.com",
    messagingSenderId: "155541693920",
    appId: "1:155541693920:web:d6a4d58bd5d72eb94bb785",
    measurementId: "G-6Q0BFPE9T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);