import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAPr0uPPMjpFti_DLCLJIfDoNoeGjBp2M",
  authDomain: "mautamu-eba5f.firebaseapp.com",
  projectId: "mautamu-eba5f",
  storageBucket: "mautamu-eba5f.appspot.com",
  messagingSenderId: "174012549904",
  appId: "1:174012549904:web:c23772f5b1dfd6432c3395",
  measurementId: "G-RKC1KD0362"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)