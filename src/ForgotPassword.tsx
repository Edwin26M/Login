import { useState } from "react";
import { getAuth, sendPasswordResetEmail} from "firebase/auth";
import {Link} from "react-router-dom";

export function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handlePasswordReset = async (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await sendPasswordResetEmail(auth, email,{
                url: 'http://localhost:5173/',
                handleCodeInApp: true,
            });
            setMessage("Correo de restablecimiento de contraseña enviado.");
        } catch (error) {
            setMessage("Error al enviar el correo de restablecimiento de contraseña. Inténtalo de nuevo.");
            console.error("Error al enviar el correo de restablecimiento de contraseña:", error);
        }
    };

    return (
        <>
            <div className=" flex bg-green-500 p-4">
                <img src="/LogoUABC-60x82.png" alt="Logo" className="ml-7"/>
                <h1 className="flex ml-8 text-2xl p-5">UNIVERSIDAD AUTONOMA DE BAJA CALIFORNIA</h1>
            </div>

            <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
                <div className="w-full max-w-sm bg-neutral-900 text-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl mb-4">Recuperar Contraseña</h2>
                    <form onSubmit={handlePasswordReset} className="flex flex-col gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-white">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 p-2 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded"
                        >
                            Enviar correo de restablecimiento
                        </button>
                        <button type="button" className="mt-2">
                            <Link to="/login" className="text-white hover:underline">Regresar al inicio de sesión</Link>
                        </button>
                    </form>
                    {message && <p className="mt-4">{message}</p>}
                </div>
            </div>
        </>
    );
}