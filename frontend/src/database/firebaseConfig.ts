import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_KEY}`,
  authDomain: "queueing-system-f2258.firebaseapp.com",
  projectId: "queueing-system-f2258",
  storageBucket: "queueing-system-f2258.appspot.com",
  messagingSenderId: "874302774753",
  appId: "1:874302774753:web:678599161f91a554a8c6a0",
  measurementId: "G-MPY49JTNFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
