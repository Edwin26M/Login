import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from "lucide-react"
import { Link } from "react-router-dom"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

type AuthFormProps = {
    mode: 'login' | 'register'
    extraHeaderButton?: React.ReactNode
    onSubmit?: (data: {email: string, password: string, name?: string, confirmPassword?: string}) => void
    onGoogleSignIn?: () => void
    errorMessage?: string
}



export function AuthForm({mode, extraHeaderButton, onSubmit, onGoogleSignIn, errorMessage }: AuthFormProps) {
    const [eyePassword, setEyePassword] = useState(false)
    const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false)
    const isLogin = mode === 'login'
    const [password, setPasword] = useState("")
    const [ confirmPassword, setConfirmPassword ] = useState("")
    const [passwordError, setPaswordError] = useState("")


    return (
        <>
        <div className="flex items-center justify-center min-h-screen min-w-full bg-neutral-950 p-4">
            <Card className="w-full max-w-sm bg-neutral-900 text-white rounded-lg shadow-lg">
                <CardHeader>
                    <div>
                        <CardTitle>{isLogin ? "Inicia sesion" : "Crear una cuenta nueva"}</CardTitle>
                        <CardDescription>
                            {isLogin ? "Ingresa tu correo electrónico para acceder a tu cuenta" : "Ingresa tu correo electrónico para crear una cuenta"}
                        </CardDescription>
                        {extraHeaderButton}
                        {errorMessage && (
                            <div className="flex items-center gap-2 bg-blue-100 border border-blue-300 text-blue-800 text-sm px-4 py-2 rounded-md mt-1">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8zm-8-4a1 1 0 00-1 1v3a1 1 0 002 0V7a1 1 0 00-1-1zm0 8a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{errorMessage}</span>
                            </div>
                        )}
                    </div>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const target = e.target as HTMLFormElement;
                            const email = (target.elements.namedItem('email') as HTMLInputElement).value;
                            const password = (target.elements.namedItem('password') as HTMLInputElement).value;
                            const name = isLogin ? undefined : (target.elements.namedItem('name') as HTMLInputElement).value;

                            if (!isLogin) {
                                if (!confirmPassword){
                                    setPaswordError("Por favor, confirma tu contraseña.");
                                    return;
                                }
                                if (password !== confirmPassword) {
                                    setPaswordError("Las contraseñas no coinciden.");
                                    return;
                                }
                                setPaswordError("");
                            }
                            onSubmit?.({ email, password, name, confirmPassword });
                        }}
                    >
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                {
                                    !isLogin && (
                                        <div className="grid gap-2">
                                            <Label htmlFor="name">Nombre</Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                placeholder="Nombre Completo"
                                                required
                                                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                                            />
                                        </div>
                                    )
                                }
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    className="bg-neutral-800 border-neutral-70000 text-white placeholder:text-neutral-500"

                                />
                            </div>
                            {/* Campo de Contraseña */}
                           <div className="grid gap-2">
                                   <Label htmlFor="password" className="text-white">Contraseña: </Label>
                                   {isLogin && (
                                       <div className="flex justify-end">
                                           <Link to="/forgot-password" className="text-sm text-white hover:underline mb-1">
                                               ¿Olvidaste tu contraseña?
                                           </Link>
                                       </div>
                                   )}
                               <div className="relative">
                                   <Input id="password"
                                          type={eyePassword ? "text" : "password"}
                                          required
                                            value={password}
                                            onChange={(e) => setPasword(e.target.value)}
                                          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                                   />
                                      <button type="button"
                                                onClick={() => setEyePassword(!eyePassword)}
                                                className="absolute inset-y-0 right-3 items-center text-neutral-400"
                                        >
                                            {eyePassword ? <Eye size={18}/> : <EyeOff size={18}/>}
                                      </button>
                               </div>
                                {
                                    !isLogin && (
                                        <div className="grid gap-2">
                                            <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                                            <div className="relative">
                                            <Input
                                                id="confirm-password"
                                                type={eyeConfirmPassword ? "text" : "password"}
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                                            /> {passwordError && (
                                            <p className="text-red-500 text-sm mt-1">{passwordError}</p>)}
                                                <button type="button"
                                                        onClick={() => setEyeConfirmPassword(!eyeConfirmPassword)}
                                                        className="absolute right-2 top-5 transform -translate-y-1/2 text-neutral-500 pr-2"
                                                >
                                                    {eyeConfirmPassword ? <Eye size={18}/> : <EyeOff size={18}/>}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                           </div>
                        </div>

                        {/* Funcion de inicio y crear cuenta */}
                <CardFooter className="flex flex-col gap-4 mt-4">
                    <Button
                        type="submit"
                        className="w-full bg-neutral-100 text-black hover:bg-neutral-200"
                    >
                        {isLogin ? "Iniciar sesión" : "Crear cuenta"}
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                            className="w-full border-neutral-700 bg-neutral-900 text-white"
                            onClick={onGoogleSignIn}
                    >
                        {isLogin ? "Iniciar sesión con Google" : "Inicia sesion con Google"}
                    </Button>
                </CardFooter>
                    </form>
                </CardContent>
            </Card>
        </div>
        </>
    )
}