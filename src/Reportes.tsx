import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuPortal,
    // DropdownMenuSeparator,
    DropdownMenuShortcut,
    // DropdownMenuSub,
    // DropdownMenuSubContent,
    // DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";

export function Reportes() {
    const navigate = useNavigate();
    const [ form, setForm ] = useState("");



    return (
        <>
           <div className="absolute top-4 right-4 z-10 rounded-full">
               <DropdownMenu>
                   <DropdownMenuTrigger asChild>
                       <Button variant="outline">Menu de Ajustes</Button>
                   </DropdownMenuTrigger>
                   <DropdownMenuContent className="w-56" align="start">
                       <DropdownMenuGroup>
                           <DropdownMenuItem>
                               <Link to="/change-email" className="w-full">
                                   Cambiar Correo
                               </Link>
                               <DropdownMenuShortcut>⇧⌘E</DropdownMenuShortcut>
                           </DropdownMenuItem>
                       </DropdownMenuGroup>
                       <DropdownMenuItem>
                           <button
                               onClick={() => navigate('/')}
                               className="w-full text-left"
                           >
                               Cerrar Sesión
                           </button>
                           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                       </DropdownMenuItem>
                   </DropdownMenuContent>
               </DropdownMenu>
           </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b bg-neutral-950 p-4">
                <h2 className="text-white text-3xl">Bienvenido a la página de Reportes</h2>

                <form className="m-4 p-4 border border-black rounded bg-white">
                    <label className="text-black mr-2">Nombre</label>
                    <input
                        type="text"
                        value={form}
                        onChange={(e) => setForm(e.target.value)}
                        placeholder="Escribe algo..."
                        className="p-2 border border-black rounded"
                    />
                </form>
            </div>
        </>
    )
}