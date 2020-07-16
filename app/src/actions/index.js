import axios from 'axios';

export const FETCHING_SELECTED_POKEMON = "FETCHING_SELECTED_POKEMON";
export const FETCHING_SELECTED_FAILED = "FETCHING_SELECTED_FAILED";
export const FETCHING_SELECTED_SUCCESS = "FETCHING_SELECTED_SUCCESS";
export const FETCHING_POKE_LIST = "FETCHING_POKE_LIST";
export const FETCHING_POKELIST_SUCCESS = "FETCHING_POKELIST_SUCCESS";
export const FETCHING_POKELIST_FAILED = "FETCHING_POKELIST_FAILED";

export const fetchPokemon = props => {
    return dispatch => {
        dispatch({ type: FETCHING_SELECTED_POKEMON });
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
            .then(response => {
                dispatch({ type: FETCHING_SELECTED_SUCCESS, payload: response.data })
                console.log(response.data)
            })
            .catch(error => {
                dispatch({ type: FETCHING_SELECTED_FAILED, payload: error.message })
            })
    }
}

export const fetchPokemonList = () => {
    return dispatch => {
        dispatch({ type: FETCHING_POKE_LIST });
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=18`)
            .then(response => {
                response.data.results.map(pokemans => {
                    axios.get(`${pokemans.url}`)
                        .then(res => {
                            dispatch({ type: FETCHING_POKELIST_SUCCESS, payload: res.data })
                        })
                        .catch(error => {
                            dispatch({ type: FETCHING_POKELIST_FAILED, payload: error.message })
                        })
                })
            })
            .catch(error => {
                dispatch({ type: FETCHING_POKELIST_FAILED, payload: error.message })
            })
    }
}

export const heckingSpritesForTheHeckingList = () => {

}
// dispatch({ type: FETCHING_POKELIST_SUCCESS, payload: response.data })