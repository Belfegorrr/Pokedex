import React from 'react'
import '../../global.css'
import { Link } from 'react-router-dom'

import logo from '../../../public/logo.svg'
import ash from '../../../public/Ash.png'

const Contato = () => {
  return (
    <div>
      <nav className="cabecalho">
        <img src={logo} alt="Logo do Pokemon" />
        <Link to="/" className="homecabecalho">
          Home
        </Link>
        <Link to="/pokemons" className="listapokemon">
          Pokemons
        </Link>
        <Link to="/contato" className="contato">
          Contato
        </Link>
      </nav>
      <section>
        <section>
          <img
            className="bannercontato"
            src={ash}
            alt="Ash e Pikachu sorrindo"
          />
        </section>
        <h1 className="titulocontato">
          Sugestão? Dúvidas? Não hesite em entrar em contato conosco.
        </h1>
        <p className="paragrafocontato">
          Seu FeedBack é importantíssimo para nosso crescimento e evolução.
        </p>
        <section className="listaparacontato">
          <p className="usuariocontato">Nome Completo</p>
          <input type="text" class="input-nome" placeholder="Nome Sobrenome" />
          <p className="usuariocontato">E-mail</p>
          <input
            type="email"
            name=""
            id=""
            class="input-email"
            placeholder="usuario@gmail.com"
          />
          <p className="usuariocontato">Telefone para contato</p>
          <input
            type="number"
            name=""
            id=""
            class="input-telefone"
            placeholder="XX-XXXXXXX"
          />
          <p className="usuariocontato">Deixe sua mensagem abaixo: </p>
          <textarea
            cols="70"
            rows="10"
            id="mensagem"
            class="input-padrao"
            required
          ></textarea>
          <input type="submit" class="submit" value="Enviar" />
          <input type="reset" class="reset" value="Resetar" />
        </section>
      </section>
    </div>
  )
}

export default Contato
