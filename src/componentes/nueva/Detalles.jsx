import { useContext, useEffect, useState } from 'react';
import estilos from './Detalles.module.css';
import { Contexto } from '../../servicios/Memoria';
import { useNavigate, useParams } from 'react-router-dom';


function Detalles() {

    const {id} = useParams();
    const navegar = useNavigate();
    const [estado, enviar] = useContext(Contexto);

    const [form,setForm] = useState({
        id:100,
        detalles:'levantar pesas',
        eventos:1,
        periodo:'semana',
        icono:'😋',
        meta:52,
        plazo:'2030-10-10',
        completado:1
    });
    const {detalles,eventos,periodo,icono,meta,plazo,completado} = form;
    const frecuencia = ['dia','semana','mes','anio'];
    const iconos = ['🏃','🤾‍♀️','😋'];

    useEffect(()=>{
        const metaMemoria = estado.objetos[id];
        if(!id){
            return;
        }
        if(!metaMemoria){
            return navegar('/404');
        }
        setForm(estado.objetos[id]);
    },[id])  
    

    const onChange = (event, prop) =>{
        setForm(estado => ({...estado, [prop] : event.target.value}));
    }    
    const crear = () => {
        enviar({tipo:'crear', meta:form});
        navegar('/lista');
    }
    const actualizar = ()=>{
        enviar({tipo:'actualizar', meta:form});
        navegar('/lista');
    }
    const eliminar = () =>{
        enviar({tipo:'eliminar', id:form.id})
        navegar('/lista');
    }
    const cancelar = () =>{
        navegar('/lista');
    }
    
    return ( 
    <div className='tarjeta'>
        <form className='p-4'>
            <label className='label'>Describe tu meta
                <input 
                    className='input' 
                    type="text" 
                    placeholder="ej. 52 caminatas" 
                    value={detalles}
                    onChange={e=>onChange(e,'detalles')}/>
            </label>
            <label className='label'>Con que frecuencia deseas cumplir tu meta? <span>(ej. 1 vez a la semana)</span>
                <div className='flex mb-6'>
                    <input 
                        className='input mr-6' 
                        type="number" 
                        value={eventos}
                        onChange={e=>onChange(e,'eventos')}/>
                    <select 
                        className='input' 
                        value={periodo}
                        onChange={e=>onChange(e,'periodo')}>
                            {frecuencia.map(opcion => <option key={opcion}>{opcion}</option>)}
                    </select>
                </div>
            </label>
            <label className='label'>
                Cuantas veces deseas completar esta meta?
                <input 
                    className='input' 
                    type="number" 
                    value={meta}
                    onChange={e=>onChange(e,'meta')}/>
            </label>
            <label className='label'>
                Tienes una fecha limite?
                <input 
                    className='input' 
                    type="date" 
                    value={plazo}
                    onChange={e=>onChange(e,'plazo')}/>
            </label>
            <label className='label'>
                Cuantas veces haz completado ya esta meta?
                <input 
                    className='input' 
                    type="number" 
                    value={completado}
                    onChange={e=>onChange(e,'completado')}/>
            </label>
            <label className='label'>
                Escoge un icono para la meta
                <select 
                    className='input' 
                    value={icono}
                    onChange={e=>onChange(e,'icono')}>
                        {iconos.map(icono =><option key={icono}>{icono}</option>)}
                </select>
            </label>
        </form>
        <div className={estilos.botones}>
            {!id &&<button 
                className='boton boton--negro'
                onClick={crear}>
                Crear
            </button>}
            {id &&<button 
                className='boton boton--negro'
                onClick={actualizar}>
                Actualizar
            </button>}
            {id &&<button 
                className='boton boton--negro'
                onClick={eliminar}>
                Eliminar
            </button>}
            <button 
                className='boton boton--gris'
                onClick={cancelar}>
                Cancelar
            </button>
        </div>
    </div>);
}

export default Detalles;