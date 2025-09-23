import {  GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "./lib/firebase.ts";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {AuthForm} from "@/AuthForm.tsx";
import { login } from "@/lib/auth.ts";
import { useState } from "react";

export function Login() {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

    const handleLogin = async ({email, password}: {email: string, password: string}) => {
        const result = await login(email, password);
        if (result.error) {
            switch (result.code) {
                case 'auth/user-not-found':
                    setErrorMessage("Usuario no encontrado.");
                    break;
                case 'auth/wrong-password':
                    setErrorMessage("Contraseña incorrecta.");
                    break;
                case 'auth/invalid-email':
                    setErrorMessage("El correo electrónico no es válido.");
                    break;
                case 'auth/user-disabled':
                    setErrorMessage("El usuario ha sido deshabilitado.");
                    break;
                default:
                    setErrorMessage("Error al iniciar sesión: " + result.error);
            }
            return;
            }
            setErrorMessage("");
        navigate("/Reportes");
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate("/Reportes");
        } catch (error) {
            if (error instanceof Error) {
            console.log (error.message);
        } else
            console.log(error);
        }
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
                <AuthForm
                    mode="login"
                    onSubmit={handleLogin}
                    onGoogleSignIn={handleGoogleSignIn}
                    errorMessage={errorMessage}
                    extraHeaderButton={
                        <Button variant="link" className="text-white" onClick={() => navigate('/registro')}>
                            ¿No tienes cuenta? Regístrate
                        </Button>
                    }
                />
            </div>
        </>
    )
}


