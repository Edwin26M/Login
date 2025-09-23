import { AuthForm } from "@/AuthForm.tsx";
import { register } from "@/lib/auth.ts";
import { Button } from "@/components/ui/button.tsx";
import { useNavigate } from "react-router-dom";

export function Registro() {
    const navigate = useNavigate();

    const handleRegister = async ({ email, password, name, confirmPassword }: { email: string, password: string, name?: string, confirmPassword?: string }) => {
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }

        const result = await register(email, password, name);

        if (result.error) {
            switch (result.code) {
                case 'auth/email-already-in-use':
                    alert("El correo electrónico ya está en uso.");
                    break;
                case 'auth/invalid-email':
                    alert("El correo electrónico no es válido.");
                    break;
                case 'auth/weak-password':
                    alert("La contraseña es demasiado débil.");
                    break;
                default:
                    alert("Error al registrar usuario: " + result.error);
            }
        } else {
            alert("Revisa tu correo para verificar tu cuenta");
            navigate("/"); // redirige después del registro
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
            <AuthForm
                mode="register"
                onSubmit={handleRegister}
                extraHeaderButton={
                    <Button variant="link" className="text-white" onClick={() => navigate('/')}>
                        ¿Ya tienes cuenta? Inicia sesión
                    </Button>
                }
            />
        </div>
    );
}
