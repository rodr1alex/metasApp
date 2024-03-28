import LogoSVG from '../../img/LogoSVG';
import PerfilSVG from '../../img/PerfilSVG';
import estilos from './estilos/Encabezado.module.css';
import Vinculo from './Vinculo';


function Encabezado() {  
    return (
      <header className={estilos.encabezado}>
        <div className={estilos.contenedor}>
            <LogoSVG className='logo'></LogoSVG>
            <a href="/" className={estilos.titulo}>Metas App</a>
        </div>
        <nav>
            <Vinculo Icono={PerfilSVG} to="./perfil"/>
        </nav>
      </header>
    )
  }
  
  export default Encabezado