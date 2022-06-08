import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Abapokemons from '../src/components/AbaPokemon/Abapokemons'
import Contato from '../src/components/AbaContato/Contato'
import Home from '../src/components/AbaHome/Home'
import NoPageFound from '../src/components/Loading/NoPageFound'

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
