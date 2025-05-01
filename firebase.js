// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Your Firebase config (from your dashboard)
const firebaseConfig = {
  apiKey: "AIzaSyBbSNn7efH0rJJqolvn4g_qNxzGAoBFK_I",
  authDomain: "chat-app-4d69f.firebaseapp.com",
  projectId: "chat-app-4d69f",
  storageBucket: "chat-app-4d69f.firebasestorage.app",
  messagingSenderId: "579885396290",
  appId: "1:579885396290:web:ed8406a221c3fc2e8ad8db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export for use in other files
export { auth, db };
