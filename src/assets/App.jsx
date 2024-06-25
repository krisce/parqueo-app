import { useState } from "react";
import appFirebase from "../credenciales";
import { getAuth,onAuthStateChanged } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore";

// componentes 
import login from "../components/Login";
import Home from "../src/components/Home"

import './App.css'
const auth = getAuth(appFirebase )

function App(){

    const [usuario, setUsuario] = useState(null)

    onAuthStateChanged(auth,(usuarioFirebase)=>{
        if(usuarioFirebase){
        setUsuario(usuarioFirebase)
        }
        else
        {
            setUsuario(null)
        }
    })
return(
<div>
    {usuario ? <Home correusuario = {usuario.email} /> : <login/>}


</div>


)



}

export default App

