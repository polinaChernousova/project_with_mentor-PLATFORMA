import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqZGUa0O8OafYecp4W51bBJwS68RcXiHM",
  authDomain: "project-with-mentor-platforma.firebaseapp.com",
  projectId: "project-with-mentor-platforma",
  storageBucket: "project-with-mentor-platforma.appspot.com",
  messagingSenderId: "796299724865",
  appId: "1:796299724865:web:f67d88a015c02a89431ec0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
