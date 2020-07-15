import axios from 'axios';

export const FETCHING_SELECTED_POKEMON = "FETCHING_SELECTED_POKEMON";
export const FETCHING_POKE_LIST = "FETCHING_POKE_LIST";
export const FETCHING_POKELIST_SUCCESS = "FETCHING_POKELIST_SUCCESS";
export const FETCHING_POKELIST_FAILED = "FETCHING_POKELIST_FAILED";

export const fetchPokemon = () => {
    return dispatch => {
        dispatch({ type: FETCHING_SELECTED_POKEMON });
    }
}

export const fetchPokemonList = () => {
    return dispatch => {
        dispatch({ type: FETCHING_POKE_LIST });
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=18`)
            .then(response => {
                dispatch({ type: FETCHING_POKELIST_SUCCESS, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FETCHING_POKELIST_FAILED, payload: error.message })
            })
    }
}