import { useState } from "react";
import appFirebase from "../credenciales";
import { getAuth,onAuthStateChanged } from "firebase/auth";

import login from "../src/componenents/Login"

import Home from "../src/componenents/Home"

import './App.css'
const auth = getAuth(appFirebase )

function App(){

    const [usuario, setUsuario] = useState(null)

    onAuthStateChanged(auth,(usuarioFirebase)=>)
    if(usuarioFirebase){
        setUsuario(usuarioFirebase)
    }
return(
<div>
    {usuario ? <Home correusuario = {usuario.email} /> : <login/>}


</div>


)



}

export default App

