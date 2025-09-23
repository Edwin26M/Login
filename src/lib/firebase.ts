// src/lib/firebase.ts
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD888DgKWtQ_Z7DxD9hJO1Q-NI22XlrGm0",
    authDomain: "proyecto-de-prueba-82e4b.firebaseapp.com",
    projectId: "proyecto-de-prueba-82e4b",
    storageBucket: "proyecto-de-prueba-82e4b.appspot.com",
    messagingSenderId: "230068009378",
    appId: "1:230068009378:web:a119d72131b15e8cbf1afb"
};

// Inicializar Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Inicializar Auth
export const auth = getAuth(app);
