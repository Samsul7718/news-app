import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCs7wl3jyaIPvAu3SA-aTe2NCq3ej118xA',
  authDomain: 'news-39cec.firebaseapp.com',
  projectId: 'news-39cec',
  storageBucket: 'news-39cec.appspot.com',
  messagingSenderId: '646419887132',
  appId: '1:646419887132:web:7dc794c0c3ff090da49bd9',
  measurementId: 'G-MFWVPY35F6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
