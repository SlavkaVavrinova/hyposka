import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAvDUsFqJ-bKLL6TxDHE-YcucVcKS6uu9g',
  authDomain: 'appka-hyposka.firebaseapp.com',
  projectId: 'appka-hyposka',
  storageBucket: 'appka-hyposka.appspot.com',
  messagingSenderId: '1063525691577',
  appId: '1:1063525691577:web:0f0dee780c70f313d32b68',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
