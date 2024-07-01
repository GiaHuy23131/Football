import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyChi_DG2lGlBddirjkvcgttapCxUaQZ1qk",
    authDomain: "football-908e7.firebaseapp.com",
    databaseURL: "https://football-908e7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "football-908e7",
    storageBucket: "football-908e7.appspot.com",
    messagingSenderId: "257116909907",
    appId: "1:257116909907:web:338b536b4add7c6ceb31a6",
    measurementId: "G-J1DJF17B85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Auth with AsyncStorage
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export const database = getDatabase(app);
export const storage = getStorage(app);
