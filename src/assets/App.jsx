import { useState } from "react"

import appFirebase from "../credenciales"
import { getAuth,onAuthStateChanged } from "firebase/auth"


import Login from '../src/components/Login'
import Home from '../src/components/Home'




import './App.css'



function App(){
    const auth = getAuth(appFirebase )
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
    {usuario ? < Home correusuario = {usuario.email} /> : <Login/>}


</div>


)



}

export default App

