import React from 'react'
import './home.css'

const Pokemon = (props) => {
  const { pokemon} = props 

  function backGroundColor(pokemon){     
      if (!pokemon) {
        console(error)
      } else { 
        const idpoke = section.classList.add(`${backGroundColor(pokemon)}`)
        const first = pokemon.types.find(() => true)
        document.getElementById(`${backGroundColor(pokemon)}`);
        return first.name;        
      }
    }
    
  return (
    <div>
    <section className='card-box' >      
      <section>
      <h3 className="pokename">{pokemon.name}</h3>
      </section>      
      {pokemon.types.map((type, index) => {      
        return (
          <p className="pokemon-type-text" key={index}>{type.type.name}</p>
        )
      })}
      <section className='index-image'>
      #{pokemon.id}
      <img
        className="pokemon-image"
        alt={pokemon.name}
        src={pokemon.sprites.front_default}
      ></img>
      </section>
    </section>
    </div>
  )
}

export default Pokemon
