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
            {props.error && <p>we can't seem to find any pokemon! we'll contact prof. oak right away: {props.error}</p>}
            {props.list.length > 0 && props.list.map(poke =>
                {return(<div key = {poke.sprites.back_default}>
                <Pokemon poke = {poke} fetchPokemon = {props.fetchPokemon} />
            </div>)})}
        </div>
    )
}

export default PokemonList;