import React from 'react';
import './pokemon.css'


const Pokemon = props => {
    return(
        <div className = "pokemon">
            <p>{props.poke.name}</p>
        </div>
    )
}

export default Pokemon;