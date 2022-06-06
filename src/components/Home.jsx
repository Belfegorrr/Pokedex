import React, { useState, useEffect } from 'react'
import './home.css'
import Navbar from './Navbar'
import Searchbar from '../components/SearchPoke'
import Pokedex from './Pokedexx'
import { getPokemonData, getPokemons } from '../Api'
import { Link} from 'react-router-dom';
import Rotas from './Routes'

const Home = () => {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [pokemons, setPokemons] = useState([])

  const itensPerPage = 24
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      setNotFound(false)
      const data = await getPokemons(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async pokemon => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log('fetchPokemons error: ', error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])
  const onSearchHandler = async pokemon => {
    if (!pokemon) {
      return fetchPokemons()
    }
    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <div>
      <Rotas/>      
      <section className="wrapper">
        <nav className="cabecalho">
          <img src="./images/logo.svg" alt="Logo do Pokemon" />
          <Link to="/"className="homecabecalho">Home</Link>
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
          <Navbar />
          <Searchbar onSearch={onSearchHandler} />
          {notFound ? (
            <div className="not-found-text">NotFound 404</div>
          ) : (
            <Pokedex
              pokemons={pokemons}
              loading={loading}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          )}
          <img
            src="../../images/banner.png"
            className="banner"
            alt="Pikachu feliz e pokebolas"
          />
        </section>
      </section>
    </div>
  )
}

export default Home