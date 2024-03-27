import { Children, createContext, useReducer } from "react";



/*const listaMock =[
    {
        "id":"1",
        "detalles":"Correr por 30 minutos",
        "periodo": "dia",
        "eventos": 1,
        "icono": "🏃",
        "meta":365,
        "plazo":"2020-10-10",
        "completado":100
    },
    {
        "id":"2",
        "detalles":"Leer 1 libro clasico",
        "periodo": "mes",
        "eventos": 2,
        "icono": "😋",
        "meta":365,
        "plazo":"2020-10-10",
        "completado":100
    },{
        "id":"3",
        "detalles":"Ver una rutina de comedia",
        "periodo": "semana",
        "eventos": 1,
        "icono": "🏃",
        "meta":365,
        "plazo":"2020-10-10",
        "completado":100
    }
] ; */
const memoria = localStorage.getItem('metas');
const estadoInicial = memoria ? JSON.parse(memoria): {
    orden:[],
    objetos : {}
};

function reductor(estado, accion){
    switch(accion.tipo){
        case 'colocar':{
            const metas = accion.metas;
            const nuevoEstado = {
                orden: metas.map(meta => meta.id),
                objetos: metas.reduce(((objeto, meta) =>({...objeto, [meta.id]:meta})),{})
            }
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;
        };
        case 'crear':{
            const id = Math.random();
            let meta = accion.meta;
            meta = {...meta, "id": id}            
            const nuevoEstado = {
                orden: [...estado.orden, id],
                objetos: {...estado.objetos, [id] : meta}
            }
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;            
        }
        case 'actualizar':{
            const metaActualizada = accion.meta;
            const idActualizar = metaActualizada.id;
            const nuevoEstado = {
                orden : [...estado.orden],
                objetos: {...estado.objetos, [idActualizar] : metaActualizada}
            }
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;        
        }
        case 'eliminar':{
            const id = accion.id;
            const nuevoOrden = estado.orden.filter(item =>item !== id);    
            delete estado.objetos[id];
            const nuevoEstado = {
                orden : nuevoOrden,
                objetos: estado.objetos
            }
            localStorage.setItem('metas', JSON.stringify(nuevoEstado));
            return nuevoEstado;  
        }
    }
}
//const metasInicial = reductor(estadoInicial, {tipo:'colocar', metas:listaMock});

export const Contexto = createContext(null);

function Memoria({children}) {
    const [estado, enviar]=useReducer(reductor, estadoInicial);
    return ( 
    <Contexto.Provider value={[estado, enviar]}>
        {children}
    </Contexto.Provider>
    );
}

export default Memoria;