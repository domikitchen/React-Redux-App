import React from "react";
import './selectedPokemon.css';

const SelectedPokemon = props => {
    return(
        <div className = "selectedPokemon">
            {props.loading && <p>we're loading in some pokemon, please hold on</p>}
            {props.error && <p>we can't seem to find your pokemon! we'll contact prof. oak right away: {props.error}</p>}
            <div className = "pokemonImg">
                <img src = {`${props.poke.sprites.front_default}`} alt = "img" />
            </div>
            <h3>{props.poke.name}</h3>
            <div className = "types">
                {
                    props.poke.types.map((ty, index) => {
                    return(<p key = {index} className = {ty.type.name}>{ty.type.name}</p>)
                    })
                }
            </div>
            <div className = "stats">
                {
                    props.poke.stats.map((stert, index) => {
                        return(
                            <p key = {index} className = "stat">{stert.stat.name}: {stert.base_stat}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SelectedPokemon;