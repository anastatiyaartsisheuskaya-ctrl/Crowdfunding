import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJUsPT9FP2lZIWitC_qUuILn3uqBtsSzo",
  authDomain: "crowdfunding-b254b.firebaseapp.com",
  projectId: "crowdfunding-b254b",
  storageBucket: "crowdfunding-b254b.firebasestorage.app",
  messagingSenderId: "150014047959",
  appId: "1:150014047959:web:27c773e7324ae4bc18e292",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
