import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmAmqnDKevoR1-axrn3G1Ex2vZ1UKdphc",
  authDomain: "ecommerceweb-7a770.firebaseapp.com",
  projectId: "ecommerceweb-7a770",
  storageBucket: "ecommerceweb-7a770.firebasestorage.app",
  messagingSenderId: "340088450237",
  appId: "1:340088450237:web:e250510b86d11f807a9bd4",
  measurementId: "G-4SMNQ9WJSP"
};

const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const auth = getAuth(app);
export const db = getFirestore(app);