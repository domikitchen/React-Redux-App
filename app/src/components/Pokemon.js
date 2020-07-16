import React from 'react';
import './pokemon.css'


const Pokemon = props => {
    return(
        <div className = "pokemon" onClick = {() => props.fetchPokemon(props.poke)}>
            <div className = "pokeImg">
                <img src = {`${props.poke.sprites.front_default}`} alt = "poke sprite" />
            </div>
            <p>{props.poke.name}</p>
        </div>
    )
}

export default Pokemon;