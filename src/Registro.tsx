import { createUserWithEmailAndPassword, updateProfile , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "./lib/firebase.ts";
import {AuthForm} from "@/AuthForm.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

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
            navigate("/Conocenos");
        } catch (error) {
            alert(error. message);
        }
    };

    return (
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
    )
}