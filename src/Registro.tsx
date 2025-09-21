import { createUserWithEmailAndPassword, updateProfile , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "./lib/firebase.ts";
import {AuthForm} from "@/AuthForm.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {getAuth, sendEmailVerification} from "firebase/auth";

const auth1 = getAuth();

const actionCodeSettings = {
    url: 'http://localhost:5173/',
    handleCodeInApp: true,

    iOS: {
        bundleId: 'com.example.ios'
    },
    android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
    },
    dynamicLinkDomain: 'proyecto-de-prueba-82e4b.firebaseapp.com'
};

sendEmailVerification(auth1.currentUser, actionCodeSettings )
    .then(() => {
    console.log('Correo de verificación enviado');
}).catch((error) => {
    console.error('Error enviado de Verificacion:', error);
});

export function Registro() {
    const navigate = useNavigate()

    const handleRegister = async ({email, password} : {email: string, password: string, name?: string}) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if (name) {
                await updateProfile(userCredential.user, { displayName: name });
            }
            console.log("Usuario registrado:", userCredential.user);
        } catch (error) {
            console.error("Error al registrar usuario:", error);
        }
    }

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/Reportes");
        } catch (error) {
            alert(error. message);
        }
    };

    return (
        <>
            <div className=" flex bg-green-700 p-4">
                <img src="/LogoUABC-60x82.png" alt="Logo" className="ml-7"/>
                <h1 className="flex ml-8 text-2xl p-5">UNIVERSIDAD AUTONOMA DE BAJA CALIFORNIA</h1>
            </div>

        <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
        <AuthForm
            mode="register"
            onSubmit={handleRegister}
            onGoogleSignIn={handleGoogleSignIn}
            extraHeaderButton={
                <Button variant="link"
                        className="text-white"
                        onClick={() => navigate('/')}>
                    Iniciar sesion
                </Button>
            }
        />
        </div>
        </>
    )
}