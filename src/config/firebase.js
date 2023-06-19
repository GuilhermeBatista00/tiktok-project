
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD1LMIDlhGIcBheTxeLeTbUWvDz33HBHY4",
  authDomain: "gymlife---jornada.firebaseapp.com",
  projectId: "gymlife---jornada",
  storageBucket: "gymlife---jornada.appspot.com",
  messagingSenderId: "254023363112",
  appId: "1:254023363112:web:4781d0c123c9a84a84231d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;