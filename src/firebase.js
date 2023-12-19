import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyABi-ROP9jjrQzZ0zx6SNdcpdlZ1iTDBhA",
    authDomain: "matutor-db-9424d.firebaseapp.com",
    projectId: "matutor-db-9424d",
    storageBucket: "matutor-db-9424d.appspot.com",
    messagingSenderId: "65458218474",
    appId: "1:65458218474:web:8331f19e42afa21689fe93"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
export { auth };
export { db };