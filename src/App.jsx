import { useContext, useEffect, useState } from 'react'
import './App.css'
import Principal from './componentes/compartidos/Principal'
import Pie from './componentes/compartidos/Pie'
import Encabezado from './componentes/compartidos/Encabezado'
import Meta from './componentes/lista/Meta'
import Lista from './componentes/lista/Lista'
import Detalles from './componentes/nueva/Detalles'
import { Route, Routes } from 'react-router-dom'
import Layout from './componentes/compartidos/Layout'
import NoEncontrado from './componentes/compartidos/NoEncontrado'
import Modal from './servicios/Modal'
import { pedirMetas } from './servicios/Pedidos'
import { Contexto } from './servicios/Memoria'


function App() {

  const [estado, enviar] = useContext(Contexto);


  useEffect(() => {
    pedirMetas()
    .then((metas) => {
    enviar({ tipo: "colocar", metas });
    })
    .catch((error) => {
    console.error("Error al obtener las metas:", error);
    });
    }, []);
    

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Lista/>}></Route>
        <Route path='/lista' element={<Lista/>}>
          <Route path='/lista/:id' element={<Modal><Detalles/></Modal>}></Route>
        </Route>
        <Route path='/crear' element={<Detalles/>}></Route>
      </Route>
      <Route path='*' element={<NoEncontrado/>}></Route>
    </Routes>    
  )
}

export default App
