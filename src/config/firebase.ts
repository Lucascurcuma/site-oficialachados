import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD-oIKWwMcL6n49xtrnOzCT63ERLJvpjw0",
  authDomain: "site-achadinhos.firebaseapp.com",
  projectId: "site-achadinhos",
  storageBucket: "site-achadinhos.firebasestorage.app",
  messagingSenderId: "56611287122",
  appId: "1:56611287122:web:e02ac5b9c6c23abb1c6f8b",
  measurementId: "G-82BL2FKKPC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);