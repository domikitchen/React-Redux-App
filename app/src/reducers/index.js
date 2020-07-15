import { FETCHING_POKE_LIST, FETCHING_POKELIST_SUCCESS } from '../actions/index'

export const initalState = {
    name: "uwu",
    pokeUrl: "",
    pokemonList: [],
    isLoading: false,
    error: ""
};

export const reducer = (state = initalState, action) => {
    switch(action.type){
        case FETCHING_POKE_LIST:
            return{
                ...state,
                isLoading: true
            }
        case FETCHING_POKELIST_SUCCESS:
            return{
                ...state,
                pokemonList: action.payload.results,
                isLoading: false
            }
        default:
            return state;
    }
}