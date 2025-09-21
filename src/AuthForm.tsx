import { Button } from "@/components/ui/button"

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

type AuthForm = {
    mode: 'login' | 'register'
    extraHeaderButton?: React.ReactNode
    onSubmit?: (data: {email: string, password: string, name?: string, confirmPassword?: string}) => void
    onGoogleSignIn?: () => void
}



export function AuthForm({mode, extraHeaderButton, onSubmit, onGoogleSignIn }: AuthFormProps) {
    const isLogin = mode === 'login'
    return (
        <div className="flex items-center justify-center min-h-screen min-w-full bg-neutral-950 p-4">
            <Card className="w-full max-w-sm bg-neutral-900 text-white rounded-lg shadow-lg">
                <CardHeader>
                    <div>
                        <CardTitle>{isLogin ? "Inicia sesion" : "Crear una cuenta nueva"}</CardTitle>
                        <CardDescription>
                            {isLogin ? "Ingresa tu correo electrónico para acceder a tu cuenta" : "Ingresa tu correo electrónico para crear una cuenta"}
                        </CardDescription>
                        {extraHeaderButton}
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
                            const confirmPassword = isLogin ? undefined : (target.elements.namedItem('confirm-password') as HTMLInputElement).value;
                            onSubmit({ email, password, name, confirmPassword });
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
                                                placeholder="Tu nombre"
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
                                    className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"

                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="password" className="text-white">Contraseña: </Label>
                                <Input id="password"
                                       type="password"
                                       required
                                       className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                                />
                            </div>
                                {
                                    !isLogin && (
                                        <div className="grid gap-2">
                                            <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                                            <Input
                                                id="confirm-password"
                                                type="password"
                                                required
                                                className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                                            />
                                        </div>
                                    )
                                }
                            </div>
                    </form>
                </CardContent>

                <CardFooter className="flex-col gap-2">
                    <Button
                        type="submit"
                        className="w-full bg-neutral-100 text-black hover:bg-neutral-200"
                    >
                        {isLogin ? "Iniciar sesión" : "Registrarse"}
                    </Button>
                    <Button variant="outline"
                            className="w-full border-neutral-700 bg-neutral-900 text-white"
                            onClick={onGoogleSignIn}
                    >
                        {isLogin ? "Iniciar sesión con Google" : "Registrarse con Google"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}