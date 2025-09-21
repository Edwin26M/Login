import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "./lib/firebase.ts";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import {AuthForm} from "@/AuthForm.tsx";

export function Login() {
    const navigate = useNavigate()

    const handleLogin = async ({email, password} : {email: string, password: string}) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Usuario registrado:", user);
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
            alert(error.message);
        }
    }

    return (
        <>
            <div className=" flex bg-green-700 p-4">
                <img src="/LogoUABC-60x82.png" alt="Logo" className="ml-7"/>
                <h1 className="flex ml-8 text-2xl p-5">UNIVERSIDAD AUTONOMA DE BAJA CALIFORNIA</h1>
            </div>

        <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
            <AuthForm mode="login"
                        onSubmit={handleLogin}
                        onGoogleSignIn={handleGoogleSignIn}
                      extraHeaderButton={
                            <Button variant="link"
                                    className="text-white"
                                    onClick={() => navigate('/registro')}>
                               ¿No tienes cuenta? Registrate
                            </Button>
                        }
            />
        </div>
        </>
    )
};


