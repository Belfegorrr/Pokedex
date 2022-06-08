import React from 'react'
import Paginacao from '../Paginacao/Paginacao'
import Pokemon from '../Pokedex/Pokemon'
import '../../global.css'

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props
  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1)
    }
  }
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1)
    }
  }
  console.log('pokemons: ', pokemons)
  return (
    <section className='pokedex-where'>
      {loading ? (
        <div className='carregandoo'>Carregando</div>
      ) : (
        <div className="pokedex-grid">          
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return (<Pokemon key={index} pokemon={pokemon} />)
            })}
          
        </div>
      )}
      <section className='paginacao'>
      <Paginacao
            page={page + 1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
          />
      </section>
    </section>
  )
}

export default Pokedex
