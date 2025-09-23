import { useState } from "react";
import { getAuth, updateEmail, sendEmailVerification} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export function ChangeEmail() {
    const [newEmail, setNewEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChangeEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        const auth = getAuth();
        if (auth.currentUser) {
            try {
                await updateEmail(auth.currentUser, newEmail);
                await sendEmailVerification(auth.currentUser, {
                    url: 'http://localhost:5173/',
                    handleCodeInApp: true,
                });
                setMessage("Correo electrónico actualizado y correo de verificación enviado.");
            } catch (error) {
                setMessage("Error al actualizar el correo electrónico. Inténtalo de nuevo.");
                console.error("Error al actualizar el correo electrónico:", error);
            }
        } else {
            setMessage("No hay un usuario autenticado.");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
                <div className="w-full max-w-sm bg-neutral-900 text-white rounded-lg shadow-lg p-6">
                    <h2 className="text-2xl mb-4">Cambiar Correo Electrónico</h2>
                    <form onSubmit={handleChangeEmail} className="flex flex-col gap-4">
                        <div className="grid gap-2">
                            <label htmlFor="newEmail" className="text-white">Nuevo Email</label>
                            <input
                                id="newEmail"
                                type="email"
                                placeholder="Ingresa tu nuevo correo electrónico"
                                required
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className="bg-neutral-800 border border-neutral-700 text-white placeholder:text-neutral-500 p-2 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-slate-900 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded"
                        >
                            Actualizar Correo Electrónico
                        </button>

                        <button type="button"
                                onClick={() => navigate('/reportes')}
                                className="mt-2 bg-sky-700 hover:bg-sky-950 text-white font-bold py-2 px-4 rounded-full">
                            Regresar al perfil
                        </button>
                    </form>
                    {message && <p className="mt-4">{message}</p>}
                </div>
            </div>
        </>
    );
}
