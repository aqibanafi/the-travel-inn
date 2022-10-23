// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-IhO5gONUZzqIGrPiBce0kQqmxDeKZQ8",
  authDomain: "the-travel-inn-ce949.firebaseapp.com",
  projectId: "the-travel-inn-ce949",
  storageBucket: "the-travel-inn-ce949.appspot.com",
  messagingSenderId: "503083586176",
  appId: "1:503083586176:web:37c04ede2208317ca78c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;