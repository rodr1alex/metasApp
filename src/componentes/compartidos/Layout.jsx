import { Outlet } from "react-router-dom";
import Lista from "../lista/Lista";
import Detalles from "../nueva/Detalles";
import Encabezado from "./Encabezado";
import Pie from "./Pie";
import Principal from "./Principal";

function Layout() {
    return (<>
        <Encabezado/>
        <Principal>
            <Outlet></Outlet>
        </Principal>
        <Pie/>
        </> 
     );
}

export default Layout;