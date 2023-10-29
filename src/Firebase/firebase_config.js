// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmj5b3N-UgvVQW94T2D1H5D7sVqtx2rQ",
  authDomain: "car-doctor-31a28.firebaseapp.com",
  projectId: "car-doctor-31a28",
  storageBucket: "car-doctor-31a28.appspot.com",
  messagingSenderId: "47833841044",
  appId: "1:47833841044:web:47ab46ce84e5120cf62381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app