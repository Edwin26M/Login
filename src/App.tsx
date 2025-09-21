import {Login} from "@/Login.tsx";
import {Registro} from "@/Registro.tsx";
import {Routes, Route} from "react-router-dom";
import {Conocenos} from "@/Conocenos.tsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/registro" element={<Registro/>}/>
              <Route path="/conocenos" element={<Conocenos/>}/>
          </Routes>
      </>
  )
}

export default App



// import {
//     Card,
//     CardAction,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
{/*<div className="flex items-center justify-center min-h-screen bg-neutral-950 p-4">
        <Card className="w-full max-w-sm bg-neutral-900 text-white rounded-lg shadow-lg">
            <CardHeader>
                <CardTitle>Iniciar sesion en tu cuenta</CardTitle>
                <CardDescription>
                    Ingresa tu correo electrónico para acceder a tu cuenta
                </CardDescription>
                <CardAction>
                    <Button variant="link" className="text-white">Registrarte</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
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
                            <div className="flex items-center">
                                <Label htmlFor="password" className="text-white">Contraseña</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 text-white hover:underline"
                                >
                                    Olvidaste tu contraseña?
                                </a>
                            </div>
                            <Input id="password"
                                   type="password"
                                   required
                                      className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full bg-neutral-100 text-black hover:bg-neutral-200">
                    Iniciar sesión
                </Button>
                <Button variant="outline" className="w-full border-neutral-700 bg-neutral-900 text-white">
                    Iniciar sesión con Google
                </Button>
            </CardFooter>
        </Card>
        </div>
    )
}
*/}