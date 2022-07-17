import React from 'react'
import '../../global.css'
import { Link} from 'react-router-dom';

import logo from '../../../public/logo.svg'
import banner from '../../../public/banner.png'

const Home = () => {  
  return (
    <div>          
      <section className="wrapper">
        <nav className="cabecalho">
          <img src={logo} alt="Logo do Pokemon" />
          <Link to="/"className="homecabecalho" >Home</Link>
          <Link to="/pokemons" className="listapokemon">Pokemons</Link>
          <Link to="/contato" className="contato">Contato</Link>
        </nav>
        <section className="capaweb">
          <h1 className="titulocapa">Qual pokemon você escolheria?</h1>
          <p className="paragrafocapa">
            Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
            habilidades.
          </p>
          <Link to="/pokemons" className="botaocapa">Veja os pokemons</Link>         
          <img
            src={banner}
            className="banner"
            alt="Pikachu feliz e pokebolas"
          />
        </section>
      </section>
    </div>
  )
}

export default Home