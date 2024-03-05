import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';

interface PokemonsFavoritesState {
    favorites : {
        [key: string] : SimplePokemon
    }
}

/* const getInitialState = () : PokemonsFavoritesState => {
    
    const fav = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}' );
    return fav;
} */

const initialState: PokemonsFavoritesState = {
  /*   '1':{id: '1', name: 'bulbasaur'},
    '4':{id: '4', name: 'charmander'},
    '7':{id: '7', name: 'squirtle'}  */
    //...getInitialState()
    favorites:{}
}


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state,action:PayloadAction<{[key: string] : SimplePokemon}>){
        state.favorites = action.payload;
    },
    toogleFavorite(state,action: PayloadAction<SimplePokemon>){
        const pokemon = action.payload
        const {id} = pokemon;
        if (!!state.favorites[id]){
            delete state.favorites[id]
        }else{
            state.favorites[id] = pokemon
        }

        //TODO: no se debe de hacer
        
        localStorage.setItem('favorite-pokemons',JSON.stringify(state.favorites));
        
    }
  }
});

export const {toogleFavorite, setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer