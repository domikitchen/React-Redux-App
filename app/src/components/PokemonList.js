import React, { useEffect } from 'react';
import './pokemonlist.css'

import Pokemon from './Pokemon';

const PokemonList = props => {
    useEffect(() => {
      props.fetchPokemonList();
    }, [])
    
    return(
        <div className = "pokemonList">
            {props.loading && <p>we're loading in some pokemon, please hold on</p>}
            {props.error && <p>we can't seem to find any pokemon! we'll contact prof. oak right away: </p>}
            {props.list.length > 0 && props.list.map(poke =>
                {return(<div key = {poke.url}>
                <Pokemon poke = {poke}/>
            </div>)})}
        </div>
    )
}

export default PokemonList;