import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Abapokemons from './Abapokemons'
import Contato from './Contato'
import Home from './Home'

const Rotas = () => {
  ;<Routes>
    <Route path="/" element={<Home />} />
    <Route exact path="/pokemons" element={<Abapokemons />} />
    <Route path="/contato" element={<Contato />} />
  </Routes>
}

export default Rotas
