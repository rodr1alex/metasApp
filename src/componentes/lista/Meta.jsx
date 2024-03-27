import { Link, useNavigate } from 'react-router-dom';
import estilos from './Meta.module.css';
import { useContext } from 'react';
import { Contexto } from '../../servicios/Memoria';

/*const metaMock = {
    "id":"1",
    "detalles":"Correr por 30 minutos",
    "periodo": "dia",
    "eventos": 2,
    "icono": "🏃",
    "meta":365,
    "plazo":"2020-10-10",
    "completado":100
};*/

function Meta({id,icono,eventos,periodo,detalles,meta,completado}) {

    const navegar = useNavigate();
    const [estado, enviar] = useContext(Contexto);

    const logrado = () =>{
        let metaActualizar = estado.objetos[id];
        metaActualizar.completado += 1;
        enviar({tipo:'actualizar', meta:metaActualizar});
    }

    //const {icono,eventos,periodo,detalles,meta,completado} = metaMock;
    return ( 
    <Link to={`/lista/${id}`} className={estilos.meta + " tarjeta"}>
        <div className='flex items-center'>
            <div className={estilos.icono}>{icono}</div>
            <p className='text-xl ml-5 mr-10'>
                {eventos} 
                <sub className='text-xs text-gray-500 ml-1'>/ {periodo}</sub>
            </p>
            <p>{detalles}</p>            
        </div>
        <div className='flex'>
            <div className='relative m-2 mx-5'>
                <p className='text-center'>{completado} de {meta}</p>
                <div className={estilos.barra1}>
                    <div style={{width: `${Math.round((completado/meta)*100)}%`}} 
                        className={estilos.barra2}>
                    </div>
                </div>
            </div>
            <Link to={'/lista'}>
                <button 
                    className='boton boton--gris'
                    onClick={logrado}>
                    Completado
                </button>
            </Link>            
        </div>
    </Link>
    );
}

export default Meta;