import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCJ7q8tYHYkhAi05SW5W62vYrUYWG1Zss",
  authDomain: "expensepractice-8069b.firebaseapp.com",
  projectId: "expensepractice-8069b",
  storageBucket: "expensepractice-8069b.appspot.com",
  messagingSenderId: "103552572667",
  appId: "1:103552572667:web:a53bdfe65afd4d6cc8645e",
  measurementId: "G-6VNPPSTNRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

export {auth,db};