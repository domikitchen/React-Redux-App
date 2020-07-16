import React from 'react';
import { connect } from "react-redux";
import './App.css';

import { fetchPokemonList, fetchPokemon } from './actions/index';

import PokemonList from './components/PokemonList';
import SelectedPokemon from './components/SelectedPokemon';

const App = props => {
  return (
    <div className="App">
      <header>
        <div className = "headboi">
          <div className = "icon">
            <img src = "https://icons-for-free.com/iconfiles/png/512/pikachu+pokeball+pokemon+icon-1320184857556086253.png" alt = "pokeheck" />
          </div>
          <h1>Pokédex</h1>
        </div>
      </header>
      <div className = "pokedex">
        <SelectedPokemon loading = {props.isLoadingSelect} error = {props.errorSelect} poke = {props.selectedPoke} />
        <PokemonList list = {props.pokemonList} loading = {props.isLoading} error = {props.error} fetchPokemonList = {props.fetchPokemonList} fetchPokemon = {props.fetchPokemon} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    selectedPoke: state.selectedPoke,
    pokemonList: state.pokemonList,
    isLoading: state.isLoading,
    isLoadingSelect: state.isLoadingSelect,
    error: state.error,
    errorSelect: state.errorSelect
  }
}

export default connect(mapStateToProps, { fetchPokemonList, fetchPokemon })(App);
