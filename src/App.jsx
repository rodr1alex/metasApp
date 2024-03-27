import { useState } from 'react'
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


function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Lista/>}/>
        <Route path='/lista' element={<Lista/>}>
          <Route path='/lista/:id' element={<Modal>
            <Detalles/>
          </Modal>}/>
        </Route>
        <Route path='/crear' element={<Detalles/>}/>
      </Route>
      <Route path='*' element={<NoEncontrado/>}/>
    </Routes>    
  )
}

export default App
