import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCir-ooyXuZnGdCiQPajHPATWUMo0Qhw8g',
  authDomain: 'learn-lingo-e673b.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-e673b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-e673b',
  storageBucket: 'learn-lingo-e673b.appspot.com',
  messagingSenderId: '854082519527',
  appId: '1:854082519527:web:74ebf0bb74268ec2983d42',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
