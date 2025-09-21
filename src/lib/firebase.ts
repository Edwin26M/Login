// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD888DgKWtQ_Z7DxD9hJO1Q-NI22XlrGm0",
    authDomain: "proyecto-de-prueba-82e4b.firebaseapp.com",
    projectId: "proyecto-de-prueba-82e4b",
    storageBucket: "proyecto-de-prueba-82e4b.firebasestorage.app",
    messagingSenderId: "230068009378",
    appId: "1:230068009378:web:a119d72131b15e8cbf1afb"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Auth
export const auth = getAuth(app);

// Si quieres, puedes exportar también la app
export default app;
