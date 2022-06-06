import React from 'react'
import Paginacao from './Paginacao'
import Pokemon from './Pokemon'
import './pokedexx.css'

const Pokedex = props => {
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
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Paginacao
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, Segura Fera ...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />
            })}
        </div>
      )}
    </div>
  )
}

export default Pokedex

// import React from 'react'
// import Paginacao from './Paginacao'
// import Pokemon from './Pokemon'
// import Home from './Home'

// const Pokedex = props => {
//   const { pokemons, loading, page, setPage, totalPages } = props
//   const onLeftClickHandler = () => {
//     if (page > 0) {
//       setPage(page - 1)
//     }
//   }
//   const onRightClickHandler = () => {
//     if (page + 1 !== totalPages) {
//       setPage(page + 1)
//     }
//   }
//   console.log('pokemons: ', pokemons)
//   return (
//     <div>
//       <div className="pokedex-header">
//         <h1>Pokedex</h1>
//         <Home />
//         <Paginacao
//           page={page + 1}
//           totalPages={totalPages}
//           onLeftClick={onLeftClickHandler}
//           onRightClick={onRightClickHandler}
//         />
//       </div>
//       {loading ? (
//         <div>Carregando, Segura Fera ...</div>
//       ) : (
//         <div className="pokedex-grid">
//           {pokemons &&
//             pokemons.map((pokemon, index) => {
//               return <Pokemon key={index} pokemon={pokemon} />
//             })}
//         </div>
//       )}
//     </div>
//   )
// }

// export default Pokedex
