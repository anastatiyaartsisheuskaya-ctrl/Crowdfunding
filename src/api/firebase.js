import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: APP_API_KEY,
  authDomain: APP_AUTH_DOMAIN,
  projectId: APP_PROJECT_ID,
  storageBucket: APP_STORAGE_BUCKET,
  messagingSenderId: APP_MESSAGING_SENDER_ID,
  appId: APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
