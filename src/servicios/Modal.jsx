import { useContext } from "react";
import { Contexto } from "./Memoria";
import { useParams } from "react-router-dom";
import Detalles from "../componentes/nueva/Detalles";

function Modal({children}) {
    
    return (<>
     <div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75">
        <div className="mx-auto">
            {children}
        </div>
    </div> 
    
    </>);
}

export default Modal;