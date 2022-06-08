import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Abapokemons from './Abapokemons'
import Contato from './Contato'
import Home from './Home'
import NoPageFound from './NoPageFound'

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pokemons" element={<Abapokemons />}></Route>
      <Route path="/contato" element={<Contato />}></Route>
      <Route path="*" element={<NoPageFound />}></Route>
    </Routes>
  )
}

export default Rotas
