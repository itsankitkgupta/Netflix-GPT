// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHLfICN33Uhp5MMYW8zLmpzisvCS5SBP0",
  authDomain: "netlixgpt-bf318.firebaseapp.com",
  projectId: "netlixgpt-bf318",
  storageBucket: "netlixgpt-bf318.appspot.com",
  messagingSenderId: "786848861358",
  appId: "1:786848861358:web:6a2dea412f32a4130e713f",
  measurementId: "G-QNXLETR2KE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();