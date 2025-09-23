import { Login } from "./Login";
import { Registro } from "./Registro";
import { Reportes } from "./Reportes";
import { Routes, Route } from "react-router-dom";
import {ForgotPassword} from "@/ForgotPassword.tsx";
import {ChangeEmail} from "@/ChangeEmail.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword/>} />
            <Route path="/change-email" element={<ChangeEmail/>}/>
            <Route path="/registro" element={<Registro />} />
            <Route path="/reportes" element={<Reportes />} />
        </Routes>
    );
}

export default App;
