export async function crearMeta(meta){
    const url = 'http://localhost:8081/meta/crear';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido del cuerpo del pedido
          },
        body: JSON.stringify(meta)
    };
    const respuesta = await fetch(url,options);
    const metaCreada = await respuesta.json();
    return metaCreada;        
}

export async function pedirMetas(){
    const response = await fetch('http://localhost:8081/meta/todas');
    const metas = await response.json();
    return metas;
}

export async function pediMeta(id){
    const response = await fetch(`http://localhost:8081/meta/${id}`);
    const meta = await response.json();
    return meta;
}

export async function actualizarMeta(meta){
    const url = 'http://localhost:8081/meta/actualizar';
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido del cuerpo del pedido
          },
        body: JSON.stringify(meta)
    };
    const respuesta = await fetch(url,options);
    const metaModificada = await respuesta.json();
    return metaModificada;
}

export async function borrarMeta(id){
    const url = `http://localhost:8081/meta/borrar/${id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido del cuerpo del pedido
          }
    };
    fetch(url,options);  
}

