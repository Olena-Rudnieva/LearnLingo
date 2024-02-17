import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB3RyTGlntfLdn8Ed3M1uyivL3ERcXlsDY',
  authDomain: 'teachers-838b3.firebaseapp.com',
  projectId: 'teachers-838b3',
  storageBucket: 'teachers-838b3.appspot.com',
  messagingSenderId: '290644177618',
  appId: '1:290644177618:web:ecb1ac84338daa0dd1b30b',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
