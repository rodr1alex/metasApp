import { useContext, useEffect } from "react";
import Meta from "./Meta";
import { Contexto } from "../../servicios/Memoria";
import { Outlet } from "react-router-dom";
import { pedirMetas } from "../../servicios/Pedidos";



function Lista() {

    const [estado, enviar] = useContext(Contexto);
    
    return (
        <>        
        {estado.orden.map(id => <Meta key={id} {...estado.objetos[id]}/>)}
        <Outlet></Outlet>
        </>
    )
}

export default Lista;