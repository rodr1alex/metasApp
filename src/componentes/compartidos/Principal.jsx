import ListaSVG from '../../img/ListaSVG'
import NuevaSVG from '../../img/NuevaSVG'
import estilos from './Principal.module.css'
import Vinculo from './Vinculo'

function Principal({children}) {     
    return (
      <div className={estilos.principal}>
        <aside className={estilos.aside}>
          <Vinculo texto="Lista de metas" to="./lista" Icono={ListaSVG}/>
          <Vinculo texto="Nueva meta" to="./crear" Icono={NuevaSVG}/>
        </aside>
        <main className={estilos.main}>
            {children}
        </main>
      </div>
    )
  }
export default Principal