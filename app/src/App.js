import React from 'react';
import { connect } from "react-redux";
import './App.css';

import { fetchPokemonList, fetchPokemon } from './actions/index';

import PokemonList from './components/PokemonList';
import SelectedPokemon from './components/SelectedPokemon';

const App = props => {

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <div className = "pokedex">
        <SelectedPokemon />
        <PokemonList list = {props.pokemonList} loading = {props.isLoading} error = {props.error} fetchPokemonList = {props.fetchPokemonList} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    pokeUrl: state.pokeUrl,
    pokemonList: state.pokemonList,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchPokemonList, fetchPokemon })(App);
