import { getPokemonData, getPokemons } from '../Pokedex/Api'
import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import Searchbar from '../Searchbar/SearchPoke'
import Pokedex from '../Pokedex/Pokedexx'
import '../../global.css'

const Abapokemons = () => {

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
      const promises = data.results.map(async (pokemon) => {
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
  const onSearchHandler = async (pokemon) => {
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
      <section className="wrapper">
        <nav className="cabecalho">
          <img src="./images/logo.svg" alt="Logo do Pokemon" />
          <Link to="/"className="homecabecalho">Home</Link>
          <Link to="/pokemons" className="listapokemon">Pokemons</Link>
          <Link to="/contato" className="contato">Contato</Link>
        </nav>
      </section>
      <section className='searchbar'>
        <h1 className='pokemontitulo'>Mais de 250 Pokemons para você escolher o seu favorito</h1>
        <Searchbar onSearch={onSearchHandler} />
      </section>
      <section className='pokemon-card'>
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
      </section>
    </div>
  )
}

export default Abapokemons